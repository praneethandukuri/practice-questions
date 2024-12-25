const people = [
  {
    name: "rahul",
    city: "pune",
    age: 56,
    hobbies: ["playing chess", "gardening"],
    pets: [
      {
        name: "max",
        animalType: "dog",
        age: 4,
        isVaccinated: true,
        favoriteActivities: ["playing fetch in the park"],
      },
    ],
    isEmployed: true,
    hasCar: true,
    studies: "computer science",
  },

  {
    name: "ananya",
    city: "Bangalore",
    age: 30,
    hobbies: ["cooking", "experiments with Italian recipes"],
    pets: [
      {
        name: "kiwi",
        age: 5,
        animalType: "parrot",
        isVaccinated: true,
        favoriteActivities: null,
      },
    ],
    isEmployed: false,
    hasCar: false,
    studies: "computer science",
  },

  {
    name: "ramesh",
    city: "jaipur",
    age: 45,
    hobbies: ["gardening", "reading historical fiction"],
    pets: [
      {
        name: "Bella",
        animalType: "Persian cats",
        age: 3,
        isVaccinated: true,
        favoriteActivities: ["love lounging in the sun"],
      },
      {
        name: "leo",
        animalType: "Persian cats",
        age: 3,
        isVaccinated: true,
        favoriteActivities: ["love lounging in the sun"],
      },
    ],

    isEmployed: true,
    hasCar: false,
    studies: null,
  },

  {
    name: "kavya",
    city: "chennai",
    age: 28,
    hobbies: ["modern fantasy novels", " binge-watching sci-fi shows"],
    pets: [
      {
        name: "snowy",
        animalType: "rabbit",
        age: 2,
        isVaccinated: true,
        favoriteActivities: [
          "enjoys hopping around her backyard",
          "nibbling on carrots",
        ],
      },
    ],
    isEmployed: false,
    hasCar: false,
    studies: null,
  },
];

const pets = (people) => people.flatMap((person) => person.pets);

// ------------------------------Question1------------------------------------

const employeesCount = (people) =>
  people.filter((person) => person.isEmployed).length;

// ------------------------------Question2------------------------------------

const noOfpeopleHavingCar = (people) =>
  people.filter((person) => person.hasCar).length;

// ------------------------------Question3------------------------------------

const noOfPetsFullyVaccinated = (people) =>
  pets(people).filter((pets) => pets.isVaccinated).length;

// ------------------------------Question4------------------------------------

const nameOfThePetsAndTypes = (people) =>
  pets(people).map(({ name, animalType }) => name + " - " + animalType);

// ------------------------------Question5------------------------------------

const cities = (people) => people.map(({ city }) => city);

// ------------------------------Question6------------------------------------

const sum = (array) => array.reduce((total, element) => total + element, 0);

const noOfHobbies = function (data) {
  const hobbiesLengths = data.map((person) => person.hobbies.length);

  return sum(hobbiesLengths);
};

const hobbies = function (data) {
  return data.flatMap((person) => person.hobbies);
};

// ------------------------------Question7------------------------------------

const unemployeesPets = function (data) {
  return data
    .filter((person) => !person.isEmployed)
    .flatMap((person) => person.pets).length;
};

// ------------------------------Question8------------------------------------

const averageAge = function (people) {
  return sum(people.map((person) => person.age)) / people.length;
};

// ------------------------------Question9------------------------------------

const csPeople = (people) =>
  people.filter((person) => person.studies === "computer science");

const noOfCsPeople = (people) => csPeople(people).length;

const noOfCsPeopleHavingPets = function (people) {
  return csPeople(people).filter((people) => people.pets.length > 0).length;
};

// ------------------------------Question10------------------------------------

const peopleHavingMoreThanOnePet = function (people) {
  return people.map((people) => people.pets).filter((pets) => pets.length > 1)
    .length;
};

// ------------------------------Question11------------------------------------

const petsWithSpecificFavoriteActivities = function (people) {
  return pets(people)
    .filter((pet) => pet.favoriteActivities !== null)
    .map((pet) => pet.name);
};

// ------------------------------Question12------------------------------------

const namesOfAnimalsBelongsToBangaloreOrChennai = function (people) {
  const BangloreOrChennai = people.filter(
    (people) => people.city === "Bangalore" || people.city === "chennai"
  );

  return BangloreOrChennai.flatMap((people) => people.pets).map(
    (people) => people.animalType
  );
};

// ------------------------------Question13------------------------------------

const vaccinatedPetstoPeopleNotHavingCars = function (people) {
  const peopleNotHavingCars = people.filter((people) => !people.hasCar);
  const pets = peopleNotHavingCars.flatMap((people) => people.pets);

  return pets.filter((pet) => pet.isVaccinated).length;
};

// ------------------------------Question14------------------------------------

const occurances = function (resultObj, animalType) {
  resultObj[animalType] =
    animalType in resultObj
      ? resultObj[animalType] + 1
      : (resultObj[animalType] = 1);

  return resultObj;
};

const commonPet = function (animal1, animal2) {
  return animal1[1] > animal2[1] ? animal1 : animal2;
};

const mostCommonTypeOfPet = function (people) {
  const allPetTypes = pets(people).map(({ animalType }) => animalType);
  const animalAndCount = Object.entries(allPetTypes.reduce(occurances, {}));

  return animalAndCount.reduce(commonPet)[0];
};

// ------------------------------Question15------------------------------------

const noOfIndividualsHaveMoreThan2Hobbies = (people) =>
  people.filter((people) => people.hobbies.length > 2).length;

// ------------------------------Question16------------------------------------

// ------------------------------Question17------------------------------------

const youngestPet = (people) => {
  return pets(people).reduce((pet1, pet2) =>
    pet1.age < pet2.age ? pet1 : pet2
  ).name;
};

// ------------------------------Question18------------------------------------

// ------------------------------Question19------------------------------------

const individualsLiveInCitiesStartingWithLetterB = (people) =>
  people.map(({ city }) => city).filter((city) => city.startsWith("B")).length;

// ------------------------------Question20------------------------------------

const individualsNotHavingOwnPets = function (people) {
  return people
    .filter((people) => people.pets.length === 0)
    .map((people) => people.name);
};

// -----------------------------------------------------------------------------
const questionsAndAnswers = [
  {
    "1. How many individuals are currently employed?": employeesCount,
  },
  { "2. How many people own a car?": noOfpeopleHavingCar },
  { "3. How many pets are fully vaccinated?": noOfPetsFullyVaccinated },
  {
    "4. What are the names of all the pets, and what type of animal is each?":
      nameOfThePetsAndTypes,
  },
  { "5  Which cities do the individuals live in?": cities },
  {
    "6. How many hobbies are shared across the group? What are they?":
      noOfHobbies,
  },
  { "What are they?": hobbies },
  {
    " 7. How many pets belong to people who are currently unemployed?":
      unemployeesPets,
  },
  {
    " 8. What is the average age of the individuals mentioned in the passage?":
      averageAge,
  },
  {
    " 9. How many individuals have studied computer science, and how many of them have pets?":
      noOfCsPeople,
  },
  {
    "and how many of them have pets?": noOfCsPeopleHavingPets,
  },
  {
    " 10. How many individuals own more than one pet?":
      peopleHavingMoreThanOnePet,
  },
  {
    "11. Which pets are associated with specific favorite activities?":
      petsWithSpecificFavoriteActivities,
  },
  {
    "12.What are the names of all animals that belong to people who live in Bangalore or Chennai?":
      namesOfAnimalsBelongsToBangaloreOrChennai,
  },
  {
    "13. How many vaccinated pets belong to people who do not own a car?":
      vaccinatedPetstoPeopleNotHavingCars,
  },
  {
    "14. What is the most common type of pet among the group?":
      mostCommonTypeOfPet,
  },
  {
    "15. How many individuals have more than two hobbies?":
      noOfIndividualsHaveMoreThan2Hobbies,
  },
  { "17. Which pet is the youngest, and what is its name?": youngestPet },
  {
    '19. How many individuals live in cities starting with the letter "B"?':
      individualsLiveInCitiesStartingWithLetterB,
  },
  { "20. Which individuals do not own any pets?": individualsNotHavingOwnPets },
];

const printQuestion = function ([[question, answer]], param) {
  console.log(question, answer(param));
};

const testAll = function (people) {
  questionsAndAnswers.map((question) =>
    printQuestion(Object.entries(question), people)
  );
};

testAll(people);
