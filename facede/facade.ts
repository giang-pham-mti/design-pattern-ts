// Subsystem classes
class DVDPlayer {
  public on(): void {
    console.log("DVD Player is on.");
  }

  public play(movie: string): void {
    console.log(`Playing movie: ${movie}`);
  }

  public stop(): void {
    console.log("Stopping movie.");
  }

  public off(): void {
    console.log("DVD Player is off.");
  }
}

class Projector {
  public on(): void {
    console.log("Projector is on.");
  }

  public wideScreenMode(): void {
    console.log("Projector in widescreen mode.");
  }

  public off(): void {
    console.log("Projector is off.");
  }
}

class Amplifier {
  public on(): void {
    console.log("Amplifier is on.");
  }

  public setVolume(level: number): void {
    console.log(`Setting volume to ${level}`);
  }

  public off(): void {
    console.log("Amplifier is off.");
  }
}

class Lights {
  public dim(level: number): void {
    console.log(`Dimming lights to ${level}%`);
  }
}

// Facade class
class HomeTheaterFacade {
  private dvdPlayer: DVDPlayer;
  private projector: Projector;
  private amplifier: Amplifier;
  private lights: Lights;

  constructor(
    dvdPlayer: DVDPlayer,
    projector: Projector,
    amplifier: Amplifier,
    lights: Lights
  ) {
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
    this.amplifier = amplifier;
    this.lights = lights;
  }

  public watchMovie(movie: string): void {
    console.log("Starting movie...");
    this.lights.dim(10);
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setVolume(10);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  public endMovie(): void {
    console.log("Shutting down the movie theater...");
    this.dvdPlayer.stop();
    this.dvdPlayer.off();
    this.amplifier.off();
    this.projector.off();
    this.lights.dim(100);
  }
}

// Client code
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const amplifier = new Amplifier();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(
  dvdPlayer,
  projector,
  amplifier,
  lights
);

homeTheater.watchMovie("The Matrix");
homeTheater.endMovie();
