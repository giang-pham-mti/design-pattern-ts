//Step 1: Define Target Interface
interface TwoPronggedOutlet {
  plugIn(): void;
}

//Step 2: Implement the Adaptee with an incompatible interface
class ThreeProngedPlug {
  public connect(): void {
    console.log("Connected the three-pronged plug");
  }
}

//Step 3 & 4: Implement the Adapter class

class PlugAdapter implements TwoPronggedOutlet {
  private threeProngedPlug: ThreeProngedPlug;

  constructor(threeProngedPlug: ThreeProngedPlug) {
    this.threeProngedPlug = threeProngedPlug;
  }

  public plugIn(): void {
    console.log("Adapter converts three-pronged plug to two-pronged outlet");
    this.threeProngedPlug.connect();
  }
}

//Client code
const threeProngedPlug = new ThreeProngedPlug();
const plugAdapter = new PlugAdapter(threeProngedPlug);
plugAdapter.plugIn(); // Client works with Target (Adapter), not directly with Adaptee
