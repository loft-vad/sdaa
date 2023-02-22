import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  private v1: Point;
  private v2: Point;
  private v3: Point;

  constructor(v1: Point, v2: Point, v3: Point) {
    super([v1, v2, v3])
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }

  public toString() {
    return `Triangle[v1=${this.v1.toString()},v2=${this.v2.toString()},v3=${this.v3.toString()}]`
  }
  
  public getType() {
    if (this.v1.distance() == this.v2.distance() || this.v2.distance() == this.v3.distance() || this.v1.distance() == this.v3.distance()) {
      if (this.v2.distance() == this.v3.distance()) {
        return 'equilateral triangle';
      }
      return 'isosceles triangle';
    }
    return 'scalene triangle'
  }
}
