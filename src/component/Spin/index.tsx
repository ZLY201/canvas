import React, { Component } from "react";

import style from "./index.module.less";

class Spin extends Component<any, any> {
  private readonly timer: NodeJS.Timeout;

  constructor(props: any) {
    super(props);
    this.state = {
      dot: '',
    };
    this.timer = setInterval(() => {
      const { dot } = this.state;
      if (dot.length >= 3) this.setState({ dot: '' });
      else this.setState({ dot: dot + '.' });
    }, 500);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  render() {
    const { dot } = this.state;
    return (
      <div className={style.spinContainer} style={this.props.style || {}}>
        <div className={style.icon} />
        <div>loading{dot}</div>
      </div>
    );
  }
}

export default Spin;
