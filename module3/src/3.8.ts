{
  // polymorphism
  class Person {
    getSleep() {
      console.log(`I'm sleeping for 8 hours per day`);
    }
  }
  class Student extends Person {
    getSleep(): void {
      console.log(`I'm sleeping for 7 hours`);
    }
  }
  class Developer extends Person {
    getSleep(): void {
      console.log(`I'm sleeping for 6 hours`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };
  const Shape1 = new Shape();
  const Shape2 = new Circle(5);
  const Shape3 = new Rectangle(3, 9);
  getShapeArea(Shape1);
  getShapeArea(Shape2);
  getShapeArea(Shape3);
}
