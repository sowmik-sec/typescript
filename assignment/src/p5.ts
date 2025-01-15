{
  interface Car {
    model: string;
    make: string;
    year: number;
  }
  interface Driver {
    name: string;
    licenseNumber: string;
  }
  interface Combine {
    model: string;
    make: string;
    year: number;
    name: string;
    licenseNumber: string;
  }
  function mixture(obj1: Car, obj2: Driver) {
    let combine: Combine = {
      model: obj1.model,
      make: obj1.make,
      year: obj1.year,
      name: obj2.name,
      licenseNumber: obj2.licenseNumber,
    };
    return combine;
  }
  const obj1: Car = {
    make: "Toyota",
    model: "Alion",
    year: 2002,
  };
  const obj2: Driver = {
    name: "Kashem",
    licenseNumber: "fh@#$23fasd",
  };
  console.log(mixture(obj1, obj2));
}
