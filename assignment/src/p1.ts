{
  const func = (n: string | number): string | number => {
    if (typeof n === "string") {
      return n.length;
    } else return n * n;
  };
  console.log(func(3));
}
