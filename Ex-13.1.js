const numbers = [1, -5, 666, 2, 400, 11];

const ascSort = (sortArray) => sortArray.slice().sort((a, b) => a - b);
const descSort = (sortArray) => sortArray.slice().sort((a, b) => b - a);

console.log(ascSort(numbers));
console.log(descSort(numbers));
