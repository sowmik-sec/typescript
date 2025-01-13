{
  // spread operator
  // rest operator

  const bros1: string[] = ["Jeason", "Luv"];
  const bros2: string[] = ["Johney", "English"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Alexa",
    redux: "Angelica",
    dbms: "Shathi",
  };
  const mentors2 = {
    prisma: "Sasha",
    redux: "Grey",
    dbms: "Mia",
  };
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  const greetFriends = (friend1s: string[]) => {
    // console.log(`Hi ${friend1} ${friend2}, ${friend3}`);
    friend1s.forEach((friend) => console.log(friend));
  };
  //   greetFriends("Angela", "White", "Rae");
}
