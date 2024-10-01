// Product Interface
interface Furniture {
  create(): string;
}

// Concrete Products
class Chair implements Furniture {
  create(): string {
    return "Chair is created.";
  }
}

class Table implements Furniture {
  create(): string {
    return "Table is created.";
  }
}

class Sofa implements Furniture {
  create(): string {
    return "Sofa is created.";
  }
}

// Creator Interface
abstract class FurnitureFactory {
  abstract factoryMethod(): Furniture;

  createFurniture(): string {
    const furniture = this.factoryMethod();
    return `Furniture Factory: ${furniture.create()}`;
  }
}

// Concrete Creators
class ChairFactory extends FurnitureFactory {
  factoryMethod(): Furniture {
    return new Chair();
  }
}

class TableFactory extends FurnitureFactory {
  factoryMethod(): Furniture {
    return new Table();
  }
}

class SofaFactory extends FurnitureFactory {
  factoryMethod(): Furniture {
    return new Sofa();
  }
}

// Client Code
function client(factory: FurnitureFactory) {
  console.log(factory.createFurniture());
}

// Using the client code
client(new ChairFactory()); // Output: Furniture Factory: Chair is created.
client(new TableFactory()); // Output: Furniture Factory: Table is created.

client(new SofaFactory()); // Output: Furniture Factory: Sofa is created.
