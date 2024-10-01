// Step 1: Define Implementation
interface Color {
  fill(): void;
}

// Step 2: Define Abstraction
class Shape {
  protected color: Color;
  constructor(color: Color) {
    this.color = color;
  }
  public draw(): void {
    this.color.fill();
  }
}

class Circle extends Shape {
  constructor(color: Color) {
    super(color);
  }
}

class Square extends Shape {
  constructor(color: Color) {
    super(color);
  }
}

// Step 3: Implement Concrete Implementations
class RedColor implements Color {
  public fill(): void {
    console.log("Filling with red color");
  }
}

class BlueColor implements Color {
  public fill(): void {
    console.log("Filling with blue color");
  }
}

// Step 4: Client code
const red = new RedColor();
const cirleRed = new Circle(red);
cirleRed.draw(); // Output: Filling with red color

const blue = new BlueColor();
const squareBlue = new Square(blue);
squareBlue.draw(); // Output: Filling with blue color
