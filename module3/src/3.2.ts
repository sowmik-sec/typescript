{
  // oop inheritance
  class Student {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }
  const student1 = new Student("Lena Paul", 32, "USA");
  class Teacher extends Student {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
  }
  const teacher1 = new Teacher("NMD", 65, "Dafadar More", "Nanu");
}
