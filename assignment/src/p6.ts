{
  function func(value: unknown) {
    let sum = 0;

    if (
      Array.isArray(value) &&
      value.every((item) => typeof item === "number")
    ) {
      value.forEach((item) => (sum += item));
    } else {
      console.log("Error");
    }
    return sum;
  }
  console.log(func([2, 3, 5, 6]));
}
