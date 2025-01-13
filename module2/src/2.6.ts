{
  // constraints
  const addCourseToStudent = <
    T extends { name: string; id: number; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 134,
    name: "Mr. X",
    email: "x@g.com",
    devType: "NL",
  });
  const student2 = addCourseToStudent({
    id: 2342,
    name: "Mr. X",
    email: "x@g.com",
    hasWatch: "Apple Watch",
  });
  const student3 = addCourseToStudent({
    id: 232442,
    name: "Mr. Z",
    email: "z@g.com",
    emni: "emni",
  });
}
