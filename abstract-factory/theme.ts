//product A
interface Toolbar {
  render(): void;
}

//product B
interface Button {
  render(): void;
}

//Concrete product B1
class LightButton implements Button {
  render(): void {
    console.log("Render a light button");
  }
}
//Concrete product B2
class DarkButton implements Button {
  render(): void {
    console.log("Render a dark button");
  }
}

//Concrete product A1
class LightToolbar implements Toolbar {
  render(): void {
    console.log("Render a light toolbar");
  }
}

//Concrete product A2
class DarkToolbar implements Toolbar {
  render(): void {
    console.log("Render a dark toolbar");
  }
}

interface ThemeFactory {
  createButton(): Button;
  createToolbar(): Toolbar;
}

class LightThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new LightButton();
  }
  createToolbar(): Toolbar {
    return new LightToolbar();
  }
}

class DarkThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new DarkButton();
  }
  createToolbar(): Toolbar {
    return new DarkToolbar();
  }
}

class ThemeClient {
  constructor(private themeFactory: ThemeFactory) {}
  render(): void {
    const button = this.themeFactory.createButton();
    const toolbar = this.themeFactory.createToolbar();
    button.render();
    toolbar.render();
  }
}

class ThemeApplication {
  main(): void {
    const lightThemeFactory = new LightThemeFactory();
    const client1 = new ThemeClient(lightThemeFactory);
    client1.render();

    const darkThemeFactory = new DarkThemeFactory();
    const client2 = new ThemeClient(darkThemeFactory);
    client2.render();
  }
}

const themeApp = new ThemeApplication();
themeApp.main();
