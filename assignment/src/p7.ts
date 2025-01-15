{
  const findFirstOccurrence = <T>(value: T[], target: T): number => {
    // Use findIndex for better efficiency
    return value.findIndex((item) => item === target);
  };
  const numbers: number[] = [1, 2, 3, 4, 5, 2];

  const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

  const targetNumber = 2;

  const targetString = "cherry";

  const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

  const indexInStrings = findFirstOccurrence(strings, targetString);

  console.log(indexInNumbers); //output:  1

  console.log(indexInStrings); //output: 2
}
