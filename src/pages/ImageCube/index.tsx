import React, { Component } from "react";

import style from "./index.module.less";

class ImageCube extends Component<any, any> {
  private readonly input: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    const cubeList = [{
      direction: 'top',
      backgroundImage: null,
    }, {
      direction: 'bottom',
      backgroundImage: null,
    }, {
      direction: 'front',
      backgroundImage: null,
    }, {
      direction: 'back',
      backgroundImage: null,
    }, {
      direction: 'left',
      backgroundImage: null,
    }, {
      direction: 'right',
      backgroundImage: null,
    }];
    this.state = {
      cubeList,
      files: [],
    };
    this.input = React.createRef();
  }

  addFile = (newFiles: File[]) => {
    const { files } = this.state;
    const length = files.length || 0;
    const reg_img = /.+\.(jpg|jpeg|gif|bmp|png)$/;
    for (let i in newFiles) {
      const index = (length + parseInt(i)) % 6;
      if (isNaN(index) || !reg_img.test(newFiles[i].name)) continue;
      files[index] = newFiles[i];
    }
    this.setState(files);
    if (files.length === 6) this.run();
  };

  selectFiles = () => {
    const input = this.input.current;
    if (input) input.click();
  };

  dragOver = (e: any) => {
    e.preventDefault();
  };

  drop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.addFile(e.dataTransfer.files);
  };

  click = (e: any) => {
    this.addFile(e.target.files);
  };

  dragstart = (e: any) => {
    try {
      e.dataTransfer.setData("index", e.target.getAttribute("data-index") as string);
    } catch (err) {
      console.error(err);
      return;
    }
  };

  removeFile = (e: any) => {
    const { files } = this.state;
    const index = parseInt(e.dataTransfer.getData("index"));
    files.splice(index, 1);
    this.setState(files);
  };

  run = () => {
    const { files } = this.state;
    const promiseAll = [];
    for (let i = 0; i < 6; ++i) {
      promiseAll.push(new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(`url(${e.target?.result})`);
        };
        reader.readAsDataURL(files[i]);
      }));
    }
    Promise.all(promiseAll).then((urls: string[]) => {
      const { cubeList } = this.state;
      urls.forEach((url: string, index: number) => {
        cubeList[index].backgroundImage = url;
      });
      this.setState(cubeList);
    });
  };

  render() {
    const { cubeList, files } = this.state;
    const length = files.length || 0;
    const content = length ? (
      <ul style={{ color: 'black', textAlign: 'left' }}>
        {
          files.map((file: any, index: number) => {
            return <li key={index} draggable={true}
                       onDragStart={this.dragstart}
                       data-index={index}>{file.name}</li>;
          })
        }
      </ul>
    ) : (
      <>
        Please click me to choose or drag image<br />
        File name will display here and cube will run<br />
        Tips: the cube needs six images
      </>
    );
    return (
      <div className={style.Container} onDragOver={this.dragOver}
           onDrop={this.removeFile}>
        <div className={style.inputContainer}>
          <div className={style.input} onClick={this.selectFiles}
               onDrop={this.drop}>
            <div className={style.inputContent}>{content}</div>
            <input type={'file'} multiple={true}
                   accept="image/gif, image/png, image/jpg, image/jpeg， image/bmp"
                   ref={this.input} onChange={this.click} />
          </div>
        </div>
        <div className={style.cubeContainer}>
          <div className={style.cube}>
            {cubeList.map((divProps: any) => {
              return <div style={{ backgroundImage: divProps.backgroundImage }}
                          className={style[divProps.direction]}
                          key={divProps.direction} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCube;
