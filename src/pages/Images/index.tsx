import React, { Component } from "react";
import Image from "component/Image";
import imagesInfo from "static/imagesInfo";

import style from "./index.module.less";
import { debounce } from "utils/funcLimit";

const imagesConfig = imagesInfo;
const PUBLIC_URL = process.env.PUBLIC_URL;

class Images extends Component<any, any> {
  private readonly container: React.RefObject<HTMLDivElement>;
  private _isMounted: boolean;

  constructor(props: any) {
    super(props);
    const num = imagesConfig.length;
    const imageList = [];
    for (let i = 0; i < num; ++i) {
      imageList.push({
        imgSrc: null,
        imgInfo: imagesConfig[i].fileInfo,
        key: imagesConfig[i].fileName,
        'data-index': i,
        viewHeight: 0,
        update: this.updateImage,
        dimensions: imagesConfig[i].dimensions,
      });
    }
    this.state = {
      imageList,
      viewIndex: -1,
    };
    this.container = React.createRef();
    this._isMounted = false;
  }

  componentDidMount() {
    const { imageList } = this.state;
    this.setState({
      imageList: imageList.map((img: any) => {
        img.viewHeight = this.container.current?.clientHeight || 0;
        return img;
      })
    });
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onScroll = () => {
    const { imageList } = this.state;
    this._isMounted && this.setState({ imageList });
  };

  updateImage = (index: number) => {
    const { imageList } = this.state;
    imageList[index].update = null;
    imageList[index].imgSrc = `${PUBLIC_URL}/images/${imagesConfig[index].fileName}`;
    this._isMounted && this.setState({ imageList });
  };

  view = (e: any) => {
    const { viewIndex } = this.state;
    if (viewIndex >= 0) {
      this._isMounted && this.setState({ viewIndex: -1 });
      return;
    }
    try {
      const index = e.target.getAttribute('data-index');
      if (index !== 0 && !index) return;
      this._isMounted && this.setState({ viewIndex: index });
    } catch (err) {
      return;
    }
  };

  viewPre = (e: any) => {
    e.stopPropagation();
    const { viewIndex, imageList } = this.state;
    const newIndex = Math.max(0, parseInt(viewIndex) - 1);
    imageList[newIndex].update = null;
    imageList[newIndex].imgSrc = `${PUBLIC_URL}/images/${imagesConfig[newIndex].fileName}`;
    this._isMounted && this.setState({ viewIndex: newIndex, imageList });
  };

  viewNext = (e: any) => {
    e.stopPropagation();
    const { viewIndex, imageList } = this.state;
    const newIndex = Math.min(imagesConfig.length - 1, parseInt(viewIndex) + 1);
    imageList[newIndex].update = null;
    imageList[newIndex].imgSrc = `${PUBLIC_URL}/images/${imagesConfig[newIndex].fileName}`;
    this._isMounted && this.setState({ viewIndex: newIndex, imageList });
  };

  render() {
    const { viewIndex, imageList } = this.state;
    return (
      <div className={style.imagesContainer}
           onClick={this.view}
           onScroll={debounce(this.onScroll, 300)} ref={this.container}>
        {imageList.map((imgProps: any) => {
          return <Image {...imgProps} />;
        })}
        <div className={style.view}
             style={{ display: `${viewIndex >= 0 ? '' : 'none'}` }}>
          <div className={style.pre} onClick={this.viewPre}>&lt;</div>
          <div className={style.imageContainer}>
            <img
              src={imageList[viewIndex]?.imgSrc || `${PUBLIC_URL}/loading.gif`}
              alt={imageList[viewIndex]?.imgInfo || ''}
              className={style.image} />
          </div>
          <div className={style.next} onClick={this.viewNext}>&gt;</div>
        </div>
      </div>
    );
  }
}

export default Images;
