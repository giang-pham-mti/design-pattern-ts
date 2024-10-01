interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  deliver(): void {
    console.log("Deliver by truck");
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log("Deliver by ship");
  }
}

abstract class Logistics {
  abstract createTransport(): Transport;
  planDelivery(): void {
    const transport = this.createTransport();
    transport.deliver();
  }
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

class Client {
  constructor(private logistics: Logistics) {}
  planDelivery(): void {
    this.logistics.planDelivery();
  }
}

class Application {
  main(): void {
    const roadLogistics = new RoadLogistics();
    const seaLogistics = new SeaLogistics();
    const client1 = new Client(roadLogistics);
    const client2 = new Client(seaLogistics);
    client1.planDelivery();
    client2.planDelivery();
  }
}

const app = new Application();
app.main();
