{
  // abstraction 1. interface 2. abstract class
  interface Vehicle1 {
    startEngin(): void;
    stopEngin(): void;
    move(): void;
  }
  // const vehicle1: Vehicle1 = {
  //     name: 'Lamborghini',
  //     model: 'Revorelto'
  // }
  class Car implements Vehicle1 {
    startEngin(): void {
      console.log("Engine started");
    }
    stopEngin(): void {
      console.log("Engin stopped");
    }
    move(): void {
      console.log("Car is moving");
    }
    test() {
      console.log("Testing");
    }
  }
  const Ferrari = new Car();
  Ferrari.startEngin();

  abstract class Vehicle2 {
    abstract startEngin(): void;
    abstract stopEngin(): void;
    abstract move(): void;
    test() {
      console.log("Testing car");
    }
  }

  class AstonMartin extends Vehicle2 {
    move(): void {
      console.log("Aston is rolling");
    }
    startEngin(): void {
      console.log("Aston is growning");
    }
    stopEngin(): void {
      console.log("Aston is resting");
    }
    test(): void {
      console.log("Testing Aston");
    }
  }

  const McLaren = new AstonMartin();
  McLaren.startEngin();
  McLaren.test();
}
