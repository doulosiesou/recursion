// Fibonacci number
// Task #3 - Calculate the nth fibonacci number
// Solution
// let n = 7;
// function fibonacci(n) {
//   if (n == 0 || n == 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   }
// console.log(`The ${n}th fibonacci number is ${fibonacci(n)}`);
// The 7th fibonacci number is 13

/*
• Assignment 1
◦ Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
◦ Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done). */

// Using a for loop

/*
function fibonacciIter(n) {
  const fibArray = [];
  let fibNext;
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      fibArray.push(i);
      console.log(`line 28 and fibArray is ${fibArray}`);
    } else {
      fibNext = fibArray[i - 1] + fibArray[i - 2];
      fibArray.push(fibNext);
    }
  }
  return fibArray;
}

// Using recursion

function fibonacciRecur(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fibonacciRecur(n - 1) + fibonacciRecur(n - 2);
  }
}

console.log(fibonacciRecur(8));
*/

// ----------------------------------------------

/* Assignment 2: Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

Pseudo-code
  sort the left half of the array (assuming n > 1)
  sort the right half of the array (assuming n > 1)
  merge the 2 halves together 

  if n < 2
    return
  else
    sort left half of elements
    sort right half of elements
    merge sorted halves 
*/

function genArray(n) {
  const largeArray = [];
  for (let i = 1; i <= 100; i++) {
    let randNum = Math.floor(Math.random() * n + 1);
    if (!largeArray.includes(randNum)) {
      largeArray.push(randNum);
    }
  }
}

const array = [
  15, 9, 12, 4, 7, 19, 2, 10, 11, 6, 17, 8, 1, 16, 14, 20, 13, 18, 3, 5,
];
const sortedArray = [];

function mergeArrays(arrA, arrB, m = arrA.length, n = arrB.length) {
  let i = 0;
  let j = 0;
  let k = 0;
  const c = [];
  let p = m + n;

  while (i <= m) {
    if (arrA[i] < arrB[j]) {
      c[k] = arrA[i];
      i++;
      k++;
    } else {
      if (j >= n) {
        c[k] = arrA[i];
        i++;
        k++;
      } else {
        c[k] = arrB[j];
        j++;
        k++;
      }
    }
  }
  if (c.length > p) {
    c.pop();
  }
  return c;
}

function sortArray(array, n = array.length) {
  let lhsN;
  let rhsN;
  const lhsArr = [];
  const rhsArr = [];
  const sortedArray = [];
  numSteps = n / 2 - 1;
  console.log(`line 109 n is ${n}`);

  if (n < 2) {
    return array;
  } else {
    lhsN = Math.floor(n / 2);
    let rhsN = n - lhsN;

    let lhsArr = array.slice(0, lhsN);
    let rhsArr = array.slice(lhsN, n);
    let sortlhsArr = sortArray(lhsArr);
    let sortrhsArr = sortArray(rhsArr);
    let reducedArrays = mergeArrays(sortlhsArr, sortrhsArr);

    return reducedArrays;
  }
}

let mergedValues = sortArray(array);
console.log(mergedValues);
