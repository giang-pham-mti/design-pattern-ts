// Step 1: Define the Abstraction interface
class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public turnOn(): void {
    this.device.enable();
  }

  public turnOff(): void {
    this.device.disable();
  }
}

// Step 2: Define the Implementor interface
interface Device {
  enable(): void;
  disable(): void;
}

// Step 3: Implement Concrete Implementors
class TV implements Device {
  public enable(): void {
    console.log("Turning on the TV");
  }

  public disable(): void {
    console.log("Turning off the TV");
  }
}

class Radio implements Device {
  public enable(): void {
    console.log("Turning on the Radio");
  }

  public disable(): void {
    console.log("Turning off the Radio");
  }
}

// Step 4: Refine the Abstraction
class AdvancedRemoteControl extends RemoteControl {
  public switchToChannel(channel: number): void {
    console.log(`Switching to channel ${channel}`);
  }
}

// Step 5: Client code
const tv = new TV();
const remoteControl = new RemoteControl(tv);
remoteControl.turnOn(); // Output: Turning on the TV
remoteControl.turnOff(); // Output: Turning off the TV

const radio = new Radio();
const advancedRemoteControl = new AdvancedRemoteControl(radio);
advancedRemoteControl.switchToChannel(5); // Output: Switching to channel 5
