export type Color = "red" | "green" | "yellow" | "pink" | "gray";

export type Lights = {
  color: Color;
  wait: number;
  next: Color;
}