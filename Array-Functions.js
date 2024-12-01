//maximum numbers
function findMaxNum(MaximumNumber) {
  let result = Math.max(...MaximumNumber);
  return result;
}
console.log(findMaxNum([0, 150, 30, 20, -8, -200]));

//minmum numbers
function findMinNum(MinmumNumber) {
  let result = Math.min(...MinmumNumber);
  return result;
}
console.log(findMinNum([0, 150, 30, 20, -8, -200]));

//sum of array

function sumNumbers(first_num, second_num) {
  let result = first_num + second_num;
  return result;
}
console.log(sumNumbers(12, 14));

//filter array

function filterArrays(filter) {
  let result = [];
  for (const value of filter) {
    if (value > 2) {
      result.push(value);
    }
  }

  return result;
}
console.log(filterArrays([1, 2, 3, 4, 5, 6, 7, 8]));
