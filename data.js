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

console.log("1. How many individuals are currently employed?");
const currentlyEmployed = (data) =>
  data.filter((person) => person.isEmployed).length;

console.log(currentlyEmployed(people));

console.log("2. How many people own a car?");

const noOfpeopleHavingCar = (data) =>
  data.filter((person) => person.hasCar).length;

console.log(noOfpeopleHavingCar(people));

console.log("3. How many pets are fully vaccinated?");

const noOfPetsFullyVaccinated = function (data) {
  const pets = data.flatMap((person) => person.pets);
  return pets.filter((pets) => pets.isVaccinated).length;
};

console.log(noOfPetsFullyVaccinated(people));

console.log(
  "4. What are the names of all the pets, and what type of animal is each?"
);

const nameOfThePetsAndTypes = function (data) {
  const pets = data.flatMap((person) => person.pets);
  return pets.map((pet) => pet.name + " - " + pet.animalType);
};

console.log(nameOfThePetsAndTypes(people));

console.log("5  Which cities do the individuals live in?");

const cities = (data) => data.map((person) => person.city);
console.log(cities(people));

console.log("6. How many hobbies are shared across the group? What are they?");

const sum = (array) => array.reduce((total, element) => total + element, 0);

const noOfHobbies = function (data) {
  const hobbiesLengths = data.map((person) => person.hobbies.length);

  return sum(hobbiesLengths);
};

console.log(noOfHobbies(people));

const hobbies = function (data) {
  return data.flatMap((person) => person.hobbies);
};

console.log(hobbies(people));

console.log(" 7. How many pets belong to people who are currently unemployed?");

const petsBelongsToUnemployees = function (data) {
  return data
    .filter((person) => !person.isEmployed)
    .flatMap((person) => person.pets).length;
};

console.log(petsBelongsToUnemployees(people));

console.log(
  " 8. What is the average age of the individuals mentioned in the passage?"
);
const average = function (people) {
  const peopleAges = people.map((person) => person.age);
  return sum(peopleAges) / peopleAges.length;
};

console.log(average(people));

console.log(
  " 9. How many individuals have studied computer science, and how many of them have pets?"
);

const peopleStudiedComputerScience = (people) =>
  people.filter((person) => person.studies === "computer science").length;

console.log(peopleStudiedComputerScience(people));

const noOfCsPeopleHavingPets = function (people) {
  const csPeople = people.filter(
    (person) => person.studies === "computer science"
  );

  return csPeople.reduce(
    (count, people) => (people.pets.length > 0 ? count + 1 : count),
    0
  );
};

console.log(noOfCsPeopleHavingPets(people));

console.log(" 10. How many individuals own more than one pet?");

const peopleHavingMoreThanOnePet = function (people) {
  return people.map((people) => people.pets).filter((pets) => pets.length > 1)
    .length;
};

console.log(peopleHavingMoreThanOnePet(people));

console.log("11. Which pets are associated with specific favorite activities?");

const petsWithSpecificFavoriteActivities = function (people) {
  const pets = people.flatMap((people) => people.pets);
  return pets
    .filter((pet) => pet.favoriteActivities !== null)
    .map((pet) => pet.name);
};

console.log(petsWithSpecificFavoriteActivities(people));

console.log(
  "12.What are the names of all animals that belong to people who live in Bangalore or Chennai?"
);

const namesOfAnimalsBelongsToBangaloreOrChennai = function (people) {
  const BangloreOrChennai = people.filter(
    (people) => people.city === "Bangalore" || people.city === "chennai"
  );

  return BangloreOrChennai.flatMap((people) => people.pets).map(
    (people) => people.animalType
  );
};

console.log(namesOfAnimalsBelongsToBangaloreOrChennai(people));

console.log(
  "13. How many vaccinated pets belong to people who do not own a car?"
);

const vaccinatedPetstoPeopleNotHavingCars = function (people) {
  const peopleNotHavingCars = people.filter((people) => people.hasCar);
  const pets = peopleNotHavingCars.flatMap((people) => people.pets);

  return pets.filter((pet) => pet.isVaccinated).length;
};

console.log(vaccinatedPetstoPeopleNotHavingCars(people));

console.log("14. What is the most common type of pet among the group?");

const mostCommonTypeOfPet = function (people) {
  const pets = people.flatMap((people) => people.pets).map((pet) => pet.name);
};

console.log("15. How many individuals have more than two hobbies?");

const noOfIndividualsHaveMoreThan2Hobbies = function (people) {
  return people.filter((people) => people.hobbies.length > 2).length;
};

console.log(noOfIndividualsHaveMoreThan2Hobbies(people));

console.log("16.  How many individuals share at least one hobby with Ramesh?");

console.log("17. Which pet is the youngest, and what is its name?");

const youngestPet = (people) => {
  const pets = people.flatMap((people) => people.pets);
  return pets.reduce((pet1, pet2) => (pet1.age < pet2.age ? pet1 : pet2)).name;
};

console.log(youngestPet(people));

console.log(
  "18. What types of books are mentioned as interests, and who reads them?"
);

console.log(
  '19. How many individuals live in cities starting with the letter "B"?'
);

const individualsLiveInCitiesStartingWithLetterB = function (people) {
  const cities = people.map((people) => people.city);
  return cities.filter((city) => city.at(0) === "B").length;
};

console.log(individualsLiveInCitiesStartingWithLetterB(people));

console.log("20. Which individuals do not own any pets?");

const individualsNotHaveOwnPets = function (people) {
  return people
    .filter((people) => people.pets.length < 0)
    .map((people) => people.name);
};

console.log(individualsNotHaveOwnPets(people));
