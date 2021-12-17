import React, { Component } from "react";

import style from "./index.module.less";

class Marketing extends Component<any, any> {
  private readonly title: React.RefObject<HTMLHeadingElement>;
  private readonly content: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      main: '我',
      thing: '是天才',
      otherSaying: '天才是我'
    };
    this.title = React.createRef();
    this.content = React.createRef();
  }

  componentDidMount() {
    if (this.title?.current && this.content?.current) this.run();
  }

  changeValue = (name: string, value: string) => {
    this.setState({ [name]: value && value !== '' ? value : undefined });
  };

  run = () => {
    if (this.title?.current && this.content?.current) {
      const { main = '我', thing = '是天才', otherSaying = '天才是我' } = this.state;
      this.title.current.innerText = `震惊！${main}${thing}，${otherSaying}！`;
      this.content.current.innerHTML = `
      &emsp;&emsp;传疯了！深度好文！轰动全国！抓紧收藏！转给需要的！再忙也要转！看到的都转了！看明白的必须转！你敢不敢转发！恳请你花三秒转！放在你朋友圈，朋友会爱死你！不转不是中国人！<br/>
      &emsp;&emsp;${main}${thing}是怎么回事呢？${main}相信大家都很熟悉，但是${main}${thing}是怎么回事呢，下面就让小编带大家一起了解吧。<br/>
      &emsp;&emsp;${main}${thing}，其实就是${otherSaying}，大家可能会很惊讶${main}怎么会${thing}呢？但事实就是这样，小编也感到非常惊讶。<br/>
      &emsp;&emsp;这就是关于${main}${thing}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！<br/>
      `;
    }
  };

  render() {
    return (
      <div className={style.marketingContainer}>
        <div className={style.title}>
          <h1>营销文案生成器</h1>
        </div>
        <div className={style.content}>
          <div className={style.info}>
            <div className={style.infoItem}>
              <h3>主体</h3>
              <input placeholder={"我"}
                     onChange={(e) => {this.changeValue('main', e.target.value);}} />
            </div>
            <div className={style.infoItem}>
              <h3>事件</h3>
              <input placeholder={"是天才"}
                     onChange={(e) => {this.changeValue('thing', e.target.value);}} />
            </div>
            <div className={style.infoItem}>
              <h3>另一种说法</h3>
              <input placeholder={"天才是我"}
                     onChange={(e) => {this.changeValue('otherSaying', e.target.value);}} />
            </div>
            <input className={style.run} onClick={this.run} type={'submit'} />
          </div>
          <div className={style.result}>
            <div className={style.textarea}>
              <h3 style={{ textAlign: 'center' }} ref={this.title}>{''}</h3>
              <div ref={this.content} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketing;
