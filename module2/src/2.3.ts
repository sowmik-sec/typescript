{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers:number[] = [3,3,2];
  const rollNumbers: GenericArray<number> = [3, 3, 2];
  // const mentors: string[] = ['Mr. X', 'Mr. Y'];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y"];
  // const boolArray: boolean[] = [true, false];
  const boolArray: GenericArray<boolean> = [true, false];

  type User = {
    name: string;
    age: number;
  };

  const user: GenericArray<User> = [
    {
      name: "Lena",
      age: 31,
    },
    {
      name: "Paul",
      age: 32,
    },
  ];

  const add = (x: number, y: number) => x + y;
  add(2, 3);

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Lena", email: "le@na.com" },
  ];
}
