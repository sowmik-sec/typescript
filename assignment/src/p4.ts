{
  const add = (input: (number | string)[]): number => {
    let sum = 0;
    input.forEach((num) => {
      if (typeof num === "number") {
        sum += num;
      }
    });
    return sum;
  };
  console.log(add([1, "two", 3, "four", 5]));
}
