// Step 1: Define the Component interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Step 2: Implement the ConcreteComponent
class SimpleCoffee implements Coffee {
  public cost(): number {
    return 5; // Base cost
  }

  public description(): string {
    return "Simple coffee";
  }
}

// Step 3: Create a Decorator class
class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public cost(): number {
    return this.coffee.cost();
  }

  public description(): string {
    return this.coffee.description();
  }
}

// Step 4: Create Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return super.cost() + 2; // Adding milk adds $2 to the cost
  }

  public description(): string {
    return super.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return super.cost() + 1; // Adding sugar adds $1 to the cost
  }

  public description(): string {
    return super.description() + ", sugar";
  }
}

// Client Code
const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.description() + " costs $" + simpleCoffee.cost());

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(milkCoffee.description() + " costs $" + milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(
  sugarMilkCoffee.description() + " costs $" + sugarMilkCoffee.cost()
);
