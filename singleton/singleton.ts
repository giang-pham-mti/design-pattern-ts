class Singleton {
  // Step 2: Static instance of Singleton class
  private static instance: Singleton;

  // Step 1: Private constructor to prevent direct instantiation
  private constructor() {
    console.log("Singleton instance created!");
  }

  // Step 3: Static method to access the singleton instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(); // Lazy initialization
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {
    console.log("Executing some business logic...");
  }
}

// Client code
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true, both references point to the same instance
