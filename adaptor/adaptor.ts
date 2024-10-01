// Step 2: Target Interface
interface Target {
  request(): void;
}

// Step 1: Adaptee with an incompatible interface
class Adaptee {
  public specificRequest(): void {
    console.log("Called specificRequest in Adaptee");
  }
}

// Step 3 & 4: Adapter Class implementing Target and adapting Adaptee
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  // Implement Target's request by internally calling Adaptee's specificRequest
  public request(): void {
    console.log("Adapter translates request to Adaptee's specificRequest");
    this.adaptee.specificRequest();
  }
}

// Client Code
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request(); // Client works with Target (Adapter), not directly with Adaptee
