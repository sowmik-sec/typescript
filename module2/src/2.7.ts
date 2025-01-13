{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";

  function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
  }

  const user = {
    name: "Mr. X",
    age: 22,
    address: "LA",
  };

  const result1 = getPropertyValue(user, "name");

  // user['name']
}
