import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(v1: Point, v2: Point, v3: Point) {
    super([v1, v2, v3]);
  }

  public toString(): string {
    return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`;
  }

  public getType(): string {
    const [sideA, sideB, sideC] = this.points.map((point, i, points) =>
      point.distance(points[(i + 1) % points.length]).toFixed(2)
    );
    
    console.log(sideA, sideB, sideC);
    if (sideA === sideB && sideB === sideC) {
      return "equilateral triangle";
    } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }
}
