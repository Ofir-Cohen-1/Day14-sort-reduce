const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

//1.
const maxGrade = (arr) =>
  arr.reduce((max, currVal) => {
    // if (currVal > max) return currVal;
    // return max;
    return Math.max(max, currVal);
  });
console.log('maximum number:', maxGrade(grades));

//2.
const sumOfEven = (arr) => {
    return arr.reduce((a, b) => {
      return b % 2 ? a : a + b;
    }, 0);
  };
  
  console.log("Sum of even nums: ", sumOfEven(grades));
  
  //3.
  const averge = (arr) => {
    return (
      arr.reduce((a, b) => {
        return a + b;
      }, 0) / arr.length
    );
  };
  
  console.log("average of nums: ", averge(grades));
