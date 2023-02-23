import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  public points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) throw new Error("There are should be 3 points for Triangle");
    
    this.filled = (filled === undefined) ? true : filled;
    this.color = color || "green";
    this.points = points;
  }

  public toString(): string {
    const pointsToString = this.points.map((point) => point.toString()).join(", ");
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${pointsToString}.`
  }

  public getPerimeter(): number {
    return this.points.reduce((sum, item, i, points) => {
      const nextPoint = points[(i + 1) % this.points.length];
      return sum + item.distance(nextPoint)
    }, 0);
  }
  // abstract getType(): string;
}
