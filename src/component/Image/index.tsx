import React, { Component } from "react";

import style from "./index.module.less";

class Image extends Component<any, any> {
  private readonly imgContainer: React.RefObject<HTMLDivElement>;
  private _isMounted: boolean;
  private readonly img: React.RefObject<HTMLImageElement>;

  constructor(props: any) {
    super(props);
    this.imgContainer = React.createRef();
    this.state = {
      loaded: false,
    };
    this._isMounted = false;
    this.img = React.createRef();
  }

  componentDidMount() {
    this._isMounted = true;
  }

  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    this.update();
    return true;
  }

  componentWillUnmount() {
    if (this.img.current) this.img.current.src = '';
    this._isMounted = false;
  }

  update = () => {
    const imgContainer = this.imgContainer?.current;
    if (imgContainer && !this.props.imgSrc) {
      setTimeout(() => {
        const viewHeight = this.props.viewHeight;
        const rect = imgContainer.getBoundingClientRect();
        if (rect.top < viewHeight) {
          if (typeof this.props.update === 'function')
            this.props.update(this.props['data-index']);
        }
      });
    }
  };

  onLoad = () => {
    this._isMounted && this.setState({ loaded: true });
  };

  render() {
    const {
      viewHeight,
      imgSrc,
      imgInfo,
      update,
      dimensions,
      ...props
    } = this.props;
    const { width, height } = dimensions;
    return (
      <div className={style.imageContainer}
           style={{
             width: `${width * 200 / height}px`,
             flexGrow: width / height,
           }}>
        <div style={{
          paddingTop: `${height * 100 / width}%`,
          backgroundImage: `url(${process.env.PUBLIC_URL}/loading.gif)`,
          backgroundSize: '120px 120px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} ref={this.imgContainer} />
        <img src={imgSrc}
             className={style.image} title={imgInfo} alt={imgInfo}
             {...props}
             style={this.state.loaded ? {} : { display: 'none' }}
             onLoad={this.onLoad} ref={this.img} />
      </div>
    );
  }
}

export default Image;
