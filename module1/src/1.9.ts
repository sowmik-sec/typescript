{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Habib",
    age: 12,
    contactNo: "234234",
    address: "fasdfasd",
    gender: "Male",
  };
  const student2: Student = {
    name: "Sowmik",
    age: 23,
    contactNo: "234234",
    address: "fadssssss",
    gender: "Male",
  };

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
