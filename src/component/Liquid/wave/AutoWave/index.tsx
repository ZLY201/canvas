import React from "react";
import Liquid from "component/Liquid";
import vertex from "utils/vertex";

import { sin } from "utils/algorithm";
import { debounce } from "utils/funcLimit";

import { textFillStyle } from "static/colorForm";

import style from "./index.module.less";

class AutoWave extends Liquid {

  private readonly bubbleCanvas: React.RefObject<HTMLCanvasElement>;
  private top: number;
  private timer: NodeJS.Timeout | null;
  private timer2: NodeJS.Timeout | null;

  constructor(props: any = Liquid.defaultProps) {
    super(props);
    this.bubbleCanvas = React.createRef();
    this.top = 0;
    this.timer = null;
    this.timer2 = null;
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
    if (this.timer2) clearInterval(this.timer2);
  }

  canvasInit(): void {
    if (!this.myCanvas.current || !this.bubbleCanvas.current) return;
    this.myCanvas.current.width = 250;
    this.myCanvas.current.height = 250;
    this.bubbleCanvas.current.width = 250;
    this.bubbleCanvas.current.height = 250;
    const width = this.myCanvas.current?.width || 0;
    const height = this.myCanvas.current?.height || 0;
    this.top = height / 2 - 10;
    const nPos = this.props.nPos;
    let baseY = height;
    for (let i = 0; i < nPos; ++i) {
      const x = width / (nPos - 1) * i;
      const y = baseY - sin(x, 0.1, 0, 5);
      this.vertexes[i] = new vertex({
        x: x,
        y: y,
        baseY: y,
      });
    }
    let theta = 0;
    new Promise<void>((resolve) => {
      let timer = setInterval(() => {
        baseY -= height / 20;
        for (let i = 0; i < nPos; ++i) {
          const x = width / (nPos - 1) * i;
          const y = baseY - sin(x, 0.2, 0, 3);
          this.vertexes[i].x = x;
          this.vertexes[i].y = y;
        }
        this.draw();
        if (baseY <= this.top) {
          resolve();
          clearInterval(timer);
        }
      }, 100);
    }).then(() => {
      this.timer2 = setInterval(() => {
        theta += 0.2;
        for (let i = 0; i < nPos; ++i) {
          const x = this.vertexes[i].x;
          const y = baseY - sin(x, 0.2, -theta, 3);
          this.vertexes[i].x = x;
          this.vertexes[i].y = y;
        }
        this.draw();
      }, 100);
    });
  }

  write = () => {
    const canvas = this.myCanvas.current;
    if (!canvas) return;

    const width = canvas.width || 0;
    const height = canvas.height || 0;
    const context = canvas.getContext("2d");

    if (!context) return;

    context.font = "xx-large lighter";
    context.fillStyle = textFillStyle[this.props.color];
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("L i q u i d", width / 2, height / 2 + 45);
  };

  canvasClick(e: any): Function {
    if (this.timer) return () => {};
    return debounce(() => {
      const canvas = this.bubbleCanvas.current;
      if (!canvas) return () => {};
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const rect = canvas.getBoundingClientRect();
      const startX = e.clientX - rect.left;
      const startY = e.clientY - rect.top;
      const bubbleQueue: { x: number; y: number; r: number; }[] = [];

      function getTag() {
        return Math.random() < 0.5 ? 1 : -1;
      }

      const bubbleNum = 50;

      for (let i = 0; i < bubbleNum; ++i) {
        const tag = getTag();
        const x = Math.max(Math.min(startX + tag * Math.random() * 50, 250), 0);
        const y = Math.max(Math.min(startY + tag * Math.random() * 20, 250), this.top);
        ctx.beginPath();
        ctx.arc(x, y, y / 25, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        bubbleQueue.push({
          x: x,
          y: y,
          r: y / 25,
        });
      }

      this.timer = setInterval(() => {
        ctx.clearRect(0, 0, 250, 250);
        let flag = false;
        for (let i = 0; i < bubbleNum; ++i) {
          const { x, y, r } = bubbleQueue[i];
          if (y < this.top) continue;
          flag = true;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
          ctx.fill();
          const tag = getTag();
          const newX = Math.max(Math.min(x + tag * Math.random() * 50, 250), 0);
          const newY = Math.max(Math.min(y + tag * Math.random() * 10, 250), this.top) - 10;
          bubbleQueue[i] = { x: newX, y: newY, r: newY / 25 };
        }
        if (!flag) {
          ctx.clearRect(0, 0, 250, 250);
          if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
          }
        }
      }, 100);
    }, 0);
  }

  render() {
    const canvas = <canvas
      ref={this.myCanvas}
      className={style.myCanvas}
    />;

    this.draw();

    const bubbleCanvas = <canvas
      ref={this.bubbleCanvas}
      className={style.bubbleCanvas}
      onClick={(e) => this.canvasClick(e)()}
    />;

    return (
      <div className={style.canvasContainer}>
        {canvas}
        {bubbleCanvas}
      </div>
    );
  }
}

export default AutoWave;
