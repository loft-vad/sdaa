interface ICoords {
  axisX: number;
  axisY: number;
}

export class Point {
  private axisX: number = 0;
  private axisY: number = 0;

  constructor(x?: number, y?:number) {
    if(x) this.axisX = x;
    if(y) this.axisY = y;
  }

  public toString() {
    return `(${this.axisX}, ${this.axisY})`
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;

  public distance(arg1?: Point | number, arg2?: number): number {
    let x: number, y: number;
    if (arg1 instanceof Point) {
      x = arg1.axisX;
      y = arg1.axisY;
    } else if (typeof arg1 === "number" && typeof arg2 === "number") {
      x = arg1;
      y = arg1;
    } else {
      x = 0;
      y = 0;
    }
    const dx = this.axisX - x;
    const dy = this.axisY - y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
