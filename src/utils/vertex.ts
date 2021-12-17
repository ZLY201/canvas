interface vertexProps {
  x: number;
  y: number;
  baseY: number;
  targetY?: number;
  friction?: number;
  deceleration?: number;
}

class vertex {
  static defaultProps = {
    x: 0,
    y: 0,
    baseY: 0,
    targetY: 0,
    friction: 0.15,
    deceleration: 0.8,
  };

  public x: number;
  public y: number;
  private readonly baseY: number;
  private targetY: number;
  private readonly friction: number;
  private readonly deceleration: number;

  constructor(props: vertexProps) {
    this.x = props.x;
    this.y = props.y;
    this.baseY = props.baseY;
    this.targetY = props.targetY || vertex.defaultProps.targetY;
    this.friction = props.friction || vertex.defaultProps.friction;
    this.deceleration = props.deceleration || vertex.defaultProps.deceleration;
  }

  updateY(diff: number) {
    this.targetY = diff + this.baseY;
    this.y += (this.targetY - this.y) * this.deceleration * this.friction;
  }
}

export default vertex;
