import React, { Component } from "react";

import style from "../index.module.less";

class SaveAsHTML extends Component<any, any> {
  private readonly container: React.RefObject<HTMLDivElement>;
  private readonly preview: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.container = React.createRef();
    this.preview = React.createRef();
  }

  componentDidMount() {
    if (!this.preview.current) return;
    this.preview.current.innerHTML = localStorage.getItem("markdownHTMLValue") || "";
    localStorage.removeItem("markdownHTMLValue");
    document.body.innerHTML = this.container.current?.innerHTML || "";
    document.body.style.overflow = "auto";
  }

  render() {
    const full = {
      width: '100%',
      height: '100%',
    };
    return (
      <div ref={this.container}>
        <div className={style.markdownContainer} style={{
          width: 'calc(100% - 10px)',
          height: '100%',
          marginLeft: '10px',
        }}>
          <div className={style.markdown} style={full}>
            <div className={style.previewContainer} style={{
              width: '100%',
              height: '100%',
              border: 'none',
              fontSize: '16px',
            }}>
              <div className={style.preview} ref={this.preview} style={full} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveAsHTML;
