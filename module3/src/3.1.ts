{
  // oop class
  class Animal {
    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Hasina", "Tyrant", "apon jon haranor bedona");
  const cat = new Animal("Mujib", "Tyrant", "reality maina naw");
  cat.makeSound();
}
