{
  class Cat {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  const isCat = (obj: object) => {
    if (obj instanceof Cat) {
      console.log(`yes, it's a cat`);
    } else {
      console.log(`no, it's not a cat.`);
    }
  };
  const cat1 = new Cat("Feroza");
  isCat({ a: 3 });
}
