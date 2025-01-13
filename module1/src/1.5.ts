// Reference Type --> Object

const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
  readonly company: "Digital playground"; // literal type
} = {
  firstName: "Lexi",
  //   middleName: "Philipino",
  lastName: "Lore",
  isMarried: false,
  company: "Digital playground",
};
