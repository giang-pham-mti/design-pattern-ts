// Step 1: Abstract Product Interfaces
interface Chair {
  sitOn(): void;
}

interface Sofa {
  layOn(): void;
}

// Step 2: Concrete Products for Modern Furniture
class ModernChair implements Chair {
  sitOn(): void {
    console.log("Sitting on a modern chair.");
  }
}

// Step 2: Concrete Products for Victorian Furniture
class VictorianChair implements Chair {
  sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

class ModernSofa implements Sofa {
  layOn(): void {
    console.log("Laying on a modern sofa.");
  }
}

class VictorianSofa implements Sofa {
  layOn(): void {
    console.log("Laying on a Victorian sofa.");
  }
}

// Step 3: Abstract Factory Interface
interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
}

// Step 4: Concrete Factories
class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }
}

// Step 5: Client Code
class FurnitureStore {
  private chair: Chair;
  private sofa: Sofa;

  constructor(factory: FurnitureFactory) {
    this.chair = factory.createChair();
    this.sofa = factory.createSofa();
  }

  deliverFurniture(): void {
    this.chair.sitOn();
    this.sofa.layOn();
  }
}

// Step 6: Usage Example
const modernFactory: FurnitureFactory = new ModernFurnitureFactory();
const victorianFactory: FurnitureFactory = new VictorianFurnitureFactory();

// Delivering Modern Furniture
console.log("Delivering Modern Furniture:");
const modernStore = new FurnitureStore(modernFactory);
modernStore.deliverFurniture();

// Delivering Victorian Furniture
console.log("\nDelivering Victorian Furniture:");
const victorianStore = new FurnitureStore(victorianFactory);
victorianStore.deliverFurniture();
