import React, { Component } from "react";

import style from "./index.module.less";
import { colorForm } from "static/colorForm";

interface LiquidProps {
  nPos?: number,
  color: string,
}

abstract class Liquid extends Component<any, any> {
  static defaultProps = {
    nPos: 500,
    color: colorForm.red,
  };

  protected readonly vertexes: any[];
  protected readonly myCanvas: React.RefObject<HTMLCanvasElement>;

  protected constructor(props: LiquidProps = Liquid.defaultProps) {
    super(props);
    const { nPos = Liquid.defaultProps.nPos } = props;
    this.vertexes = new Array(nPos);
    this.myCanvas = React.createRef();
  }

  protected abstract canvasInit(): void;

  protected abstract canvasClick(e: any): Function;

  write() {}

  componentDidMount() {
    this.canvasInit();
    this.draw();
  }

  protected draw = () => {
    const { nPos } = this.props;
    const ctx = this.myCanvas.current?.getContext("2d");
    if (this.myCanvas.current && ctx) {
      const width = this.myCanvas.current.width;
      const height = this.myCanvas.current.height;
      ctx.save();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = this.props.color;
      ctx.beginPath();
      ctx.moveTo(this.vertexes[0].x, this.vertexes[0].y);
      for (let i = 1; i < nPos; ++i) {
        ctx.lineTo(this.vertexes[i].x, this.vertexes[i].y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.lineTo(this.vertexes[0].x, this.vertexes[0].y);
      ctx.fill();
      this.write();
    }
  };

  render() {
    const canvas = <canvas
      className={style.canvas}
      ref={this.myCanvas}
      onClick={(e) => this.canvasClick(e)()}
    />;
    this.draw();
    return canvas;
  }
}

export default Liquid;
