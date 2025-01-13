{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 2123,
    name: "Mr. X",
  });
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTuple<string, string>("Bangladesh", "Dhaka");

  const resTuple = createArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    { name: "asia" }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@g.com",
    devType: "NL",
  });
  const student2 = addCourseToStudent({
    name: "Mr. X",
    email: "x@g.com",
    devType: "NL",
    hasWatch: "Apple Watch",
  });

  //
}
