{
  // interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Leana",
    computer: {
      brand: "IBM",
      model: "xxxx",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "Symphony",
      model: "xxx",
      display: "OLED",
    },
  };

  interface KawasakiBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, KawasakiBike> = {
    name: "Lovings",
    computer: {
      brand: "Apple",
      model: "xxxx",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "Apple",
      model: "xxx",
      display: "OLED",
      sleepTrack: true,
      heartTrack: true,
    },
    bike: {
      model: "Kawasaki",
      engineCapacity: "1000cc",
    },
  };

  //
}
