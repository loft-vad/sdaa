import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  public points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length != 3) throw new Error("There are should be 3 points for Triangle");
    
    if(color && filled) {
      this.color = color;
      this.filled = filled;
    } else {

    this.color = "green";
    this.filled = true;

    }
    console.log(this.points)
  }
  public toString() {
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points.forEach(point => point.toString())})`
  }
  public getPerimeter() {
    return this.points.reduce((sum, item) => sum + item.distance(), 0);
  }
  // abstract getType(): string;
}
