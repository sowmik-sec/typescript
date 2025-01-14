{
  // type guards
  // typeof operator
  type Alphanumeric = string | number;
  const add = (
    param1: string | number,
    param2: string | number
  ): number | string => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  console.log(add(3, 5));

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name}. My role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "Alexa Grace",
  };
  const adminUser: AdminUser = {
    name: "Karla Kush",
    role: "admin",
  };
  getUser(adminUser);
}
