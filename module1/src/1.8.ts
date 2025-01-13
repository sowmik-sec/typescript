{
  const user = {
    id: 324,
    name: {
      firstName: "Mia",
      middleName: "English",
      lastName: "Malkova",
    },
    contactNo: "03241234123",
    address: "US",
  };
  const {
    name: { lastName },
  } = user;

  // array destructuring
  const myFriends = ["Rachel", "Pizalatto", "Briyana"];
  const [a, b] = myFriends;
}
