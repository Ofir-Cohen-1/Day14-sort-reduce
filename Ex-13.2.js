const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//a.1.
const ascSort = (sortArray) => sortArray.slice().sort();

//a.2.
const descSort = (sortArray) => sortArray.slice().sort().reverse();

// console.log(descSort(foods));
// console.log(ascSort(foods));

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//b.1.
const ascSortUpperCase = (arr) =>
  [...arr].sort((str1, str2) =>
    str1.toLowerCase() < str2.toLowerCase() ? -1 : 1
  );
// console.log(ascSortUpperCase(foodsWithUpperCase));
// console.log(foodsWithUpperCase);

//b.2.
const descSortUpperCase = (arr) =>
  [...arr].sort((str1, str2) =>
    str1.toLowerCase() < str2.toLowerCase() ? 1 : -1
  );

// console.log(descSortUpperCase(foodsWithUpperCase));
// console.log(foodsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

//c.1.
const sortByWordLength = (arr) =>
  [...arr].slice().sort((word1, word2) => word2.length - word1.length);

// console.log(sortByWordLength(words));
