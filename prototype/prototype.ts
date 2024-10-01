// Step 1: Define the Prototype interface
interface Prototype {
  clone(): this;
}

// Step 2: Implement Concrete Prototypes
class Computer implements Prototype {
  constructor(
    public processor: string,
    public RAM: string,
    public storage: string
  ) {}

  clone(): this {
    return Object.assign({}, this); // Shallow copy
  }
}

// Step 3: Use the Client to clone objects
const originalComputer = new Computer("Intel i7", "16GB", "1TB SSD");
const clonedComputer = originalComputer.clone();

console.log(originalComputer); // Output: Computer { processor: 'Intel i7', RAM: '16GB', storage: '1TB SSD' }
console.log(clonedComputer); // Output: Computer { processor: 'Intel i7', RAM: '16GB', storage: '1TB SSD' }
