{
  interface Person {
    name: string;
    address?: {
      city: string;
      street: string;
    };
    phone?: string;
  }
  function getAddressCity(person: Person) {
    return person?.address?.city;
  }
  const person1: Person = {
    name: "Giana Dior",
    address: {
      city: "Florida",
      street: "2/256",
    },
    phone: "+32342343",
  };
  console.log(getAddressCity(person1));
}
