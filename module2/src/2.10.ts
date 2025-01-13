{
  // mapped types
  const arrOfNumbers: number[] = [1, 2, 3];
  // const arrayOfStrings: string[] = ['1', '2', '3'];
  const arrayOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 23,
  };

  type Height = AreaNumber["height"];
}
