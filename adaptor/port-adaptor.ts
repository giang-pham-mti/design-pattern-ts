interface TypeCPort {
  connect(): void;
}

class LinghtingPort {
  public connect(): void {
    console.log("Connected the lightning port");
  }
}

class PortAdapter implements TypeCPort {
  private linghtingPort: LinghtingPort;

  constructor(linghtingPort: LinghtingPort) {
    this.linghtingPort = linghtingPort;
  }

  public connect(): void {
    console.log("Adapter converts lightning port to Type-C port");
    this.linghtingPort.connect();
  }
}

const linghtingPort = new LinghtingPort();
const portAdapter = new PortAdapter(linghtingPort);
portAdapter.connect();
