// Product: Complex object being constructed
class Car {
  engine: string = "";
  seats: number = 0;
  hasGPS: boolean = false;

  showDetails(): void {
    console.log(
      `Car with ${this.engine} engine, ${this.seats} seats, GPS: ${this.hasGPS}`
    );
  }
}

// Builder Interface: Defines methods for constructing parts of the product
interface CarBuilder {
  reset(): void;
  setEngine(engine: string): this;
  setSeats(seats: number): this;
  setGPS(hasGPS: boolean): this;
  build(): Car;
}

// Concrete Builder: Implements the steps to build the product
class SedanCarBuilder implements CarBuilder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }

  setSeats(seats: number): this {
    this.car.seats = seats;
    return this;
  }

  setGPS(hasGPS: boolean): this {
    this.car.hasGPS = hasGPS;
    return this;
  }

  build(): Car {
    const result = this.car;
    this.reset(); // Optional: reset builder for the next build
    return result;
  }
}

// Director (Optional): Constructs the product using the builder
class CarDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  constructSportsCar(): Car {
    return this.builder.setEngine("V8").setSeats(2).setGPS(true).build();
  }

  constructFamilyCar(): Car {
    return this.builder.setEngine("V6").setSeats(4).setGPS(false).build();
  }
}

// Client code: Uses the builder and director to build products
const sedanBuilder = new SedanCarBuilder();
const director = new CarDirector(sedanBuilder);

// Building a sports car
const sportsCar = director.constructSportsCar();
sportsCar.showDetails(); // Output: Car with V8 engine, 2 seats, GPS: true

// Building a family car
const familyCar = director.constructFamilyCar();
familyCar.showDetails(); // Output: Car with V6 engine, 4 seats, GPS: false

// Building without director
const builder = new SedanCarBuilder();
const car = builder.setEngine("V6").setSeats(5).setGPS(true).build();
car.showDetails(); // Output: Car with V6 engine, 5 seats, GPS: true
