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

  private calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
    return parseInt(Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2)).toFixed(0));
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;

  public distance(x?: number, y?: number, other?: Point): number {
    if (other) {
      return this.calculateDistance(this.axisX, other.axisX, this.axisY, other.axisY);
    }
    if (x && y) {
      return this.calculateDistance(this.axisX, x, this.axisY, y);
    }
    return this.calculateDistance(this.axisX, this.axisY, 0, 0);
  }
}
