{
  // union types
  //   type FrontendDeveloper = "fakibazdeveloper" | "juniorDeveloper";
  //   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";
  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O" | "A" | "B";
  //   };
  //   const user1: User = {
  //     name: "Leana",
  //     bloodGroup: "A",
  //     gender: "female",
  //     email: "a@b.com",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
