{
  //  utility types
  // pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  // read only
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "Mr. X",
    age: 12,
    contactNo: "012",
  };
  //   person1.contactNo = "234234";

  // Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   }

  const emptyObj: Record<string, unknown> = {};

  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "AA",
    b: "BB",
    c: "CC",
    d: "DD",
  };
}
