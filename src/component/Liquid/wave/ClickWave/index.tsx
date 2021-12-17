import Liquid from "component/Liquid";
import vertex from "utils/vertex";
import { calcDiff } from "utils/algorithm";
import { throttle } from "utils/funcLimit";

class ClickWave extends Liquid {
  private readonly diff: number[];
  private initDiff: number;
  private start: number;
  private timer: NodeJS.Timeout | null;

  constructor(props: any = Liquid.defaultProps) {
    super(props);
    const { nPos } = this.props;
    this.diff = new Array(nPos).fill(0);
    this.initDiff = 0;
    this.start = Math.floor(nPos / 2);
    this.timer = null;
  }

  canvasInit() {
    const width = this.myCanvas.current?.width || 0;
    const nPos = this.props.nPos;
    for (let i = 0; i < nPos; ++i) {
      const x = width / (nPos - 1) * i;
      const y = 0;
      this.vertexes[i] = new vertex({
        x: x,
        y: y,
        baseY: y,
      });
    }
  }

  drawFrame = () => {
    if (this.initDiff) {
      const { nPos } = this.props;
      this.initDiff *= 0.1;
      calcDiff(nPos, 15, this.initDiff, 0.01, this.diff, this.start);
      for (let i = 0; i < nPos; ++i) this.vertexes[i].updateY(this.diff[i]);
    } else if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.draw();
  };

  canvasClick = (e: any) => {
    return throttle(() => {
      const canvas = this.myCanvas.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      this.start = Math.min(Math.floor(this.props.nPos * x / rect.width), this.props.nPos);
      this.initDiff = canvas.height;
      this.initDiff *= Math.max(this.start, this.props.nPos - this.start) / 15;
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(this.drawFrame, 10);
    }, 10);
  };
}

export default ClickWave;
