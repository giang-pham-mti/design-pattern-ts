// Step 1: Define the Abstraction
// This will be the base class or interface representing the core object without any decorations.
// In this case, it's a Person who can "wear" clothes.
interface Person {
  wear(): string;
}

// Step 2: Create the Concrete Component (BasicPerson)
// This represents the base object (a person who is initially not wearing any clothes).
class BasicPerson implements Person {
  wear(): string {
    return "Person is wearing:";
  }
}

// Step 3: Define the Decorator Class (ClothingDecorator)
// The ClothingDecorator implements the Person interface and is designed to wrap around a Person object,
// adding additional behavior (layers of clothes).
abstract class ClothingDecorator implements Person {
  protected person: Person;
  constructor(person: Person) {
    this.person = person;
  }

  wear(): string {
    return this.person.wear();
  }
}

// Step 4: Create Concrete Decorators (Shirt, Jacket, Hat)
// Each piece of clothing (like a shirt, jacket, or hat) will extend the ClothingDecorator,
// adding its own behavior (i.e., adding that piece of clothing).
class Shirt extends ClothingDecorator {
  wear(): string {
    return `${this.person.wear()} Shirt,`;
  }
}

class Jacket extends ClothingDecorator {
  wear(): string {
    return `${this.person.wear()} Jacket,`;
  }
}

class Hat extends ClothingDecorator {
  wear(): string {
    return `${this.person.wear()} Hat,`;
  }
}

// Step 5: Client Code
const basicPerson = new BasicPerson();
console.log(basicPerson.wear()); // Output: "Person is wearing: "

// Adding a shirt
const personWithShirt = new Shirt(basicPerson);
console.log(personWithShirt.wear()); // Output: "Person is wearing: Shirt, "

// Adding a jacket on top of the shirt
const personWithShirtAndJacket = new Jacket(personWithShirt);
console.log(personWithShirtAndJacket.wear()); // Output: "Person is wearing: Shirt, Jacket, "

// Adding a hat on top of everything
const fullyDressedPerson = new Hat(personWithShirtAndJacket);
console.log(fullyDressedPerson.wear()); // Output: "Person is wearing: Shirt, Jacket, Hat, "
