// learning function
// normal function
// arrow function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

const poorUser = {
  name: "Ahsan",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map(
  (element: number): number => element * element
);
