interface Car {
  assemble(): void;
}

class Sedan implements Car {
  assemble(): void {
    console.log("Assemble sedan");
  }
}

class SUV implements Car {
  assemble(): void {
    console.log("Assemble SUV");
  }
}

abstract class CarFactory {
  abstract createCar(): Car;
  assembleCar(): void {
    const car = this.createCar();
    car.assemble();
  }
}

class SedanFactory extends CarFactory {
  createCar(): Car {
    return new Sedan();
  }
}

class SUVFactory extends CarFactory {
  createCar(): Car {
    return new SUV();
  }
}

class CarAssembler {
  constructor(private factory: CarFactory) {}
  assemble(): void {
    this.factory.assembleCar();
  }
}

class CarApplication {
  main(): void {
    const sedanAssembler = new CarAssembler(new SedanFactory());
    sedanAssembler.assemble();

    const suvAssembler = new CarAssembler(new SUVFactory());
    suvAssembler.assemble();
  }
}

const carApp = new CarApplication();
carApp.main();
