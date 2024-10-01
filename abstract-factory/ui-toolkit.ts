interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

class WindowsButton implements Button {
  render(): void {
    console.log("Render a button in Windows style.");
  }
}

class MacOSButton implements Button {
  render(): void {
    console.log("Render a button in MacOS style.");
  }
}

class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log("Render a checkbox in Windows style.");
  }
}

class MacOSCheckbox implements Checkbox {
  render(): void {
    console.log("Render a checkbox in MacOS style.");
  }
}

interface UIToolkitFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsUIToolkitFactory implements UIToolkitFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacOSUIToolkitFactory implements UIToolkitFactory {
  createButton(): Button {
    return new MacOSButton();
  }

  createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}

class UIToolkitClient {
  constructor(private toolkitFactory: UIToolkitFactory) {}
  render(): void {
    const button = this.toolkitFactory.createButton();
    const checkbox = this.toolkitFactory.createCheckbox();
    button.render();
    checkbox.render();
  }
}

class UIToolkitApplication {
  main(): void {
    const windowsFactory = new WindowsUIToolkitFactory();
    const macosFactory = new MacOSUIToolkitFactory();
    const client1 = new UIToolkitClient(windowsFactory);
    const client2 = new UIToolkitClient(macosFactory);
    client1.render();
    client2.render();
  }
}
