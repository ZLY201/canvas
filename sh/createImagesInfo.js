const fs = require("fs");
const path = require("path");
const sizeOf = require('image-size');
const imagesInfo = require("../src/static/imagesInfo");

const pathName = "../public/images";

async function readdir() {
  return new Promise((resolve, reject) => {
    try {
      fs.readdir(pathName, (err, files) => {
        const images = [];
        (function iterator(i) {
          if (i === files.length) {
            resolve(images);
            return;
          }
          fs.stat(path.join(pathName, files[i]), (err, data) => {
            if (data.isFile()) {
              images.push(files[i]);
            }
            iterator(i + 1);
          });
        })(0);
      });
    } catch (err) {
      reject(err);
    }
  });
}

async function outputConfig(images) {
  const imagesInfoMap = new Map();
  imagesInfo.forEach(info => {
    imagesInfoMap.set(info.fileName, info.fileInfo);
  });
  const newImagesInfo = [];
  const reg_img = /.+\.(jpg|jpeg|gif|bmp|png)$/;
  images.forEach(fileName => {
    const dimensions = sizeOf(path.join(pathName, fileName));
    newImagesInfo.push({
      fileName,
      fileType: reg_img.test(fileName) ? 'image' : 'video',
      fileInfo: imagesInfoMap.get(fileName) || '',
      dimensions,
    });
  });
  const data = `
  const imagesInfo = ${JSON.stringify(newImagesInfo)};\n
  export default imagesInfo;
  `;
  await fs.writeFileSync('../src/static/imagesInfo.ts', data);
  return Promise.resolve();
}

async function run() {
  await outputConfig((await readdir()));
}

run();
