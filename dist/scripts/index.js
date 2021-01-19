// console.log("Add subtract divide multiply");
// console.log("");

const number = document.querySelector(".input-number");
const result = document.querySelector(".input-result");
const btn = document.querySelector(".btn-send");
const what = document.querySelector(".what-to-do");

const doTheMath = (num1, res) => {
  if (num1 >= res * 2 && (num1 / res) % 2 === 0)
    return `The given result must be ${res} therefore you can divide by ${
      num1 / res
    }`;
  if ((res / num1) % 2 === 0)
    return `The given result must be ${res} therefore gotta multiply by ${
      res / num1
    }`;
  if (num1 > res)
    return `The given result must be ${res} therefore gotta subtract ${
      num1 - res
    }`;
  if (num1 < res)
    return `The given result must be ${res} therefore gotta add ${res - num1}`;
  if (num1 === res)
    return `The given result must be ${res} therefore gotta do nothing (null)`;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let num1 = Number(number.value);
  let res = Number(result.value);

  what.classList.add("pt-2");

  if (num1 >= res * 2 && (num1 / res) % 2 === 0)
    return (what.textContent = `The given result must be ${res} therefore you can divide by ${
      num1 / res
    }`);

  if ((res / num1) % 2 === 0)
    return (what.textContent = `The given result must be ${res} therefore gotta multiply by ${
      res / num1
    }`);

  if (num1 > res)
    return (what.textContent = `The given result must be ${res} therefore gotta subtract ${
      num1 - res
    }`);

  if (num1 < res)
    return (what.textContent = `The given result must be ${res} therefore gotta add ${
      res - num1
    }`);

  if (num1 === res)
    return (what.textContent = `The given result must be ${res} therefore gotta do nothing (null)`);
});

// console.log(doTheMath(15, 24));
// console.log(doTheMath(39, 24));
// console.log(doTheMath(30, 24));
// console.log(doTheMath(4, 24));
// console.log(doTheMath(24, 24));
// console.log(doTheMath(12, 24));
// console.log(doTheMath(100, 24));
// console.log(doTheMath(6, 24));
// console.log(doTheMath(96, 24)); // divide by 4

// # Integer in Range?
// ​
//   Using JavaScript, write the logic to determine if a number
// is within range.If it is within range, print to the console:
// Within range, but only if the number is an integer.
// ​
// If the number is not an integer, print to the console: Not an integer.
// ​
// > "within bounds" means a number is considered equal or greater
// than a lower bound and lesser(but not equal) to an upper bound.
// ​
// Examples:
// ​
// number: 3
// lower bound: 1
// upper bound: 9
// ➞ true
// ​
// number: 6,
// lower bound: 1
// upper bound: 6
// ➞ false
// ​
// number: 4.5,
// lower bound: 3
// upper bound: 8
// ➞ false

const lower = document.querySelector(".input-low");
const upper = document.querySelector(".input-upp");
const check = document.querySelector(".input-check");
const btnRange = document.querySelector(".btn-send-range");
const isRange = document.querySelector(".is-in-range");

const lookForRange = (num, low, upp) => {
  if (!Number.isInteger(num)) {
    return false;
  } else if (num > low && num < upp) {
    return true;
  } else if (num <= low || num >= upp) {
    return false;
  }
};

btnRange.addEventListener("click", function (e) {
  e.preventDefault();

  let num = Number(check.value);
  let low = Number(lower.value);
  let upp = Number(upper.value);

  isRange.classList.add("pt-2");

  if (!Number.isInteger(num)) {
    return (isRange.textContent = `${num} in not an integer`);
  } else if (num > low && num < upp) {
    return (isRange.textContent = `${num} is in range`);
  } else if (num <= low || num >= upp) {
    return (isRange.textContent = `${num} is NOT in range`);
  }
});

// console.log(lookForRange(6, 1, 9)); // true
// console.log(lookForRange(6, 1, 6)); // false
// console.log(lookForRange(16, 1, 9)); // false

// # Covert to seconds
// ​
// Using JavaScript convert the values to seconds
// and print to the console, for example`3 minutes are 180 seconds`.
// ​
// ## Samples:
// ​
// ### Hours:
// ​
// - 24
// - 48
// ​
// ### Days:
// ​
// - 3
// - 31

const days = document.querySelector(".input-days");
const hours = document.querySelector(".input-hours");
const minutes = document.querySelector(".input-minutes");
const btnConvSec = document.querySelector(".btn-send-conver-sec");
const printCovSecs = document.querySelector(".print-cov-secs");

const giveMeTime = (days, hours, minutes) => {
  let daySec = 86400;
  let hourSec = 3600;
  let minSec = 60;

  return days * daySec + hours * hourSec + minutes * minSec;
};

btnConvSec.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log(days.value);

  return (printCovSecs.textContent = `${days.value || 0} days, ${
    hours.value || 0
  } hours and ${minutes.value || 0} minutes means ${giveMeTime(
    Number(days.value),
    Number(hours.value),
    Number(minutes.value)
  )} seconds`);
});

// console.log(giveMeTime(10, 20, 10));

// # One Odd and One Even
// ​
// Using JavaScript for each of the sample numbers,
//   check whether each number contains one even and one odd digit.
// ​
// If it does, log to the console:
// 'Number 12 contains one even and one odd number.'
// ​
// Sample numbers:
// ​
// - 12 ➞ true
// - 55 ➞ false
// - 22 ➞ false
// - 87 ➞ true

const numberOddEven = document.querySelector(".input-number-odd-even");
const btnOddEven = document.querySelector(".btn-send-odd-even-check");
const printOddEven = document.querySelector(".print-odd-even-check");

const checkOddEven = (num) => {
  let divList = document.createElement("div");
  divList.className = "list-odd-even";
  divList.appendChild(results());

  function results() {
    num
      .toString()
      .split("")
      .map((x) => {
        if (x % 2 === 0) {
          let listItem = document.createElement("li");
          listItem.className = "li-odd-even";
          let res = document.createTextNode(`${x} is even`);
          listItem.appendChild(res);
          return printOddEven.appendChild(listItem);
        }

        let listItem = document.createElement("li");
        listItem.className = "li-odd-even";
        let res = document.createTextNode(`${x} is  NOT even`);
        listItem.appendChild(res);

        return printOddEven.appendChild(listItem);
      });
  }
};

btnOddEven.addEventListener("click", function (e) {
  e.preventDefault();

  checkOddEven(numberOddEven.value);
});

// console.log(checkOddEven(12223398084309));

// # Random guesses
// ​
// ## Divisible by 3
// ​
// Pick a random number between 0 and 100.
// If the number is divisible by 3, print
// to the console a message, like this one: 'Number 3 is divisible by 3'.
// ​
// ## How far apart
// ​
// Pick two random numbers between 0 and 100.
// If they happen to be equal, print a message
// to the console, saying the 2 number were the same.
// If the two number are more than 20 numbers
// apart or less than 20 numbers apart, print
// the appropriate message to the console.

const divideRandom = (num) => {
  let randomNum = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  if (randomNum === num) return "They are equal";

  const divide = randomNum / num;

  // if
  console.log(randomNum);
  return divide;
};

// console.log(divideRandom(10));

// # Longest words
// ​
// Using JavaScript, from the list of words below,
// find the longest word, print it to the console
// together with its length.
// ​
// Next, find and print to the console the word
// (or words) that contain all vowesl: a, o, e, i and u.
// ​
// ## List of words:
// ​
// - Antidisestablishmentarianism
// - floccinaucinihilipilification
// - Honorificabilitudinitatibus
// - Pneumonoultramicroscopicsilicovolcanoconiosis
// - Supercalifragilisticexpialidocious

const findVoewls = (word) => {
  let arrVowelsAll = [];
  let arrVowelsNotInc = [];
  let arrVowelsInc = [];
  arrVowelsAll.unshift([
    ..."a",
    word.split("").filter((v) => v === "A" || v === "a").length,
  ]);
  arrVowelsAll.unshift([
    ..."o",
    word.split("").filter((v) => v === "O" || v === "o").length,
  ]);
  arrVowelsAll.unshift([
    ..."e",
    word.split("").filter((v) => v === "E" || v === "e").length,
  ]);
  arrVowelsAll.unshift([
    ..."i",
    word.split("").filter((v) => v === "I" || v === "i").length,
  ]);
  arrVowelsAll.unshift([
    ..."u",
    word.split("").filter((v) => v === "U" || v === "u").length,
  ]);

  console.log(`In the word ${word}:`);
  arrVowelsAll
    .sort((a, b) => b[1] - a[1])
    .forEach((element) => {
      if (element[1] === 0) arrVowelsNotInc.push(element[0]);
      if (element[1] >= 1) arrVowelsInc.push([...element[0], element[1]]);
    });

  arrVowelsInc.forEach((element) => {
    console.log(`the Voewl ${element[0]} appears ${element[1]} times`);
  });

  console.log("");
  if (arrVowelsNotInc.length === 5) {
    console.log(`This word has no Voewls!`);
    return;
  }
  if (arrVowelsNotInc.length === 0) {
    console.log(`All the Voewl were included in the word!`);
  }

  if (arrVowelsNotInc.length === 1) {
    console.log(`The Voewl ${arrVowelsNotInc[0]}was not included in the word!`);
  }

  if (arrVowelsNotInc.length === 2) {
    console.log(
      `The Voewls ${arrVowelsNotInc[0]} and ${arrVowelsNotInc[1]} were not included in the word!`
    );
  }
  if (arrVowelsNotInc.length > 2) {
    console.log(
      `The Voewls ${arrVowelsNotInc
        .splice(0, arrVowelsNotInc.length - 1)
        .join(
          ", "
        )} and ${arrVowelsNotInc.pop()} were not included in the word!`
    );
  }

  // let arrJoined = arrVowelsNotInc.join(", ");

  // // console.log(arrVowelsInc);
  // console.log(arrVowelsNotInc.splice(0, 2).join(", "));
  // console.log(arrVowelsNotInc.pop());
  // console.log(arrJoined.pop());
  // return arrVowels.sort((a, b) => b[1] - a[1]);
};

console.log(findVoewls("AntdsstblsAUUIhmntrnsm"));

// 1. Create an array to hold the years
// 2. Create a variable for the current year
// 3. Create 3-4 age variables -- (2021 - 1990)
// 4. In each of the age variables, subtract one
//    of the years from the current year to get an age
// 5. Store the age variables inside an ages array.
//    OR just do the step 4 calculations inside
//    the ages array from the start.

// Years: 1990, 1967, 2002, 2010, 2018

// let arrYears = [
//   { firstName: "John", birth: 1990 },
//   { firstName: "Edward", birth: 1967 },
//   { firstName: "Martha", birth: 2002 },
//   { firstName: "Jim", birth: 2018 },
// ];
// let currYear = new Date().getFullYear();
// let ages = [];

// const calcAge = (arrY) => {
//   arrY.forEach((item, i) => {
//     ages.push(item.firstName, currYear - item.birth);
//     console.log(item.firstName, " is ", currYear - item.birth, " years old");
//   });

//   return ages;
// };

// console.log(calcAge(arrYears));

////////
////////
////////
////////
////////

/// For loop exercise
// 1. Write a for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.
// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

const checkIteration = (num) => {
  for (let i = 0; i < num; i++) {
    let isEven = [i] % 2 === 0;
    isEven ? console.log(`${[i]} is even`) : console.log(`${[i]} is odd`);
  }
};

// checkIteration(16);

////////
////////
////////
////////
////////

// 1. sumOfNumbers.
// ​
// - Create a program that adds up the numbers in
//   an array(of at least 3 numbers).
//   Bonus: Print to screen both the sum and the
//   product of these numbers.
// ​
// 2. Hello Frien.
// ​
// - Create an array filled with your friends' and
//   family's names. Loop over the array and greet
//   each friend.Bonus: Print the indexes of each
//   item in the array.

//    Examples:
// ​
// - [Maria, Mike, Paul, Doven] ➞ expected output:
//    "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
// ​
// - Bonus [Susan, Rezvane, Hadi] ➞ expected bonus
//   output: "Susan is at index 0 of my friends
//   and family array, Rezvane is at index 1 of my
//   friends and family array, Hadi is at index 2 of
//   my friends and family array".
// ​
// 3. Write a loop which iterates the integers from 1 to 100.
//    But for multiples of three print "Fizz" instead of the
//    number and for the multiples of five print "Buzz".
//    For numbers which are multiples of both three and five print "FizzBuzz".

let arrayOfNumbers = [];

const addToArray = (num1, num2, num3) => {
  const push = () => {
    arrayOfNumbers.push(num1, num2, num3);
    return arrayOfNumbers;
  };
  const sum = () => {
    return arrayOfNumbers.reduce((acc, curr) => acc + curr);
  };
  return [push(), sum()];
};

console.log(addToArray(20, 20, 20));

// ARRAY OF FRIENDS
["Maria", "Mike", "Paul", "Doven"].forEach((x, i) =>
  console.log(`${x} is at index ${i}`)
);

for (let i = 0; i < 100; i++) {
  isThree = [i] % 3 === 0;
  isFive = [i] % 5 === 0;

  if (isThree) console.log(`Fizz`);
  if (isFive) console.log(`Buzz`);
  if (!isThree || !isFive) console.log(`${[i]}`);
}

// Use NESTED LOOPS in each of your solutions
// ​
// Q1. Construct the following pattern.
// ​
// -
// - -
// ​
// ---
// ​
// ---
// ​

// Q2. Given the following array:
// ​
const arrToNest = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

// Create the following output:
// ​
// row 0
// 1
// 2
// 1
// 24
// row 1
// 8
// 11
// 9
// 4
// row 2
// ...
// (and so on)

// for (let i = 0; i < arrToNest.length; i++) {
//   let arr = arrToNest[i];
//   console.log(`row ${Number([i]) + 1}`);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// Q3. Output the following:
// ​
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// BONUS CHALLENGE Write a solution for
// Q3 using nested loops which are all
// nested within a single outer loop.

let allArr = [];

const nestThis = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i];
    for (let i = 0; i < arr2.length; i++) {
      allArr.push(arr2[i]);
    }
  }
  console.log("UnSorted", allArr.join(" "));
  console.log("Sorted", allArr.sort((a, b) => a - b).join(" "));
};

nestThis(arrToNest);

// # Drawing with loops

// Let's draw some shapes with JavaScript.

// ## Triangle

// ![example](example-triangle.png)

// ## Rectangle

// ![example](example-rectangle.png)

// ![example](example-rectangle-filled.png)

// ## Chess

// ![example](example-chess.png)

// ## Diagonal

// ![example](example-diagonal.png)

// let newHashArr = [];

// const hashTriangle = (num) => {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     arr.push("#");
//   }

//   for (let i = 0; i < arr.length; i++) {
//     newHashArr.push(arr[i]);
//     console.log(newHashArr.join(""));
//   }
// };

// console.log(hashTriangle(8));

// for (let i = "#"; i.length <= 8; i += "#") {
//   console.log(i);
// }

// let makeArrChess = [];

// for (let i = "# -"; i.length <= 18; i += " # -") {
//   // const element = array[i];
//   makeArrChess.push(i);
//   console.log(makeArrChess[makeArrChess.length - 1]);
//   console.log(makeArrChess);
// }

// //// EASY SOLUTION

// let chessBoard = ["# - # - # - # - ", "- # - # - # - # "];
// for (let i = 0; i < chessBoard.length * 2; i++) {
//   console.log(chessBoard[0]);
//   console.log(chessBoard[1]);
// }

// // FUNCTION THAT RETURNS MULTIPLED CHESS BOARD

// const bigChessBoard = (num) => {
//   let chessBoard = ["# - # - # - # -", "- # - # - # - #"];

//   for (let i = 0; i < chessBoard.length * num * 2; i++) {
//     console.log(chessBoard[0].repeat(num * 2));
//     console.log(chessBoard[1].repeat(num * 2));
//   }
// };
// bigChessBoard(2);

// console.log(chessBoard.length);

// const word = "stressed";
// let revWord = "";

// console.log(revWord);

// console.log(revWord);

// #########
// #       #
// #       #
// #       #
// #########

// let rettArr = [{s:'#', r:'20'}, ];

// for (let i = "#"; i.length; i++) {
//   console.log(i);
// }

// ===========
// |==========
// ||=========
// |||========
// 15 x 15

//////
//////
const drawDiagonal = (num) => {
  console.log("=".repeat(num));
  for (let i = "|"; i.length <= num; i += "|") {
    console.log(i + "=".repeat(num - i.length));
  }
};

///
// ///
// console.log("=".repeat(15));
// for (let i = "|"; i.length <= 15; i += "|") {
//   console.log(i + "=".repeat(15 - i.length));
// }

// drawDiagonal(20);

// // reverse

// let word = "=";

// let revWord = "";

// for (let i = word.length - 1; i > 0; i--) {
//   console.log(word[i]);
//   revWord += word[i];
// }

// console.log(revWord);

// #########
// #       #
// #       #
// #       #
// #########

////
///
///

function createRett(width) {
  console.log("#".repeat(width));

  for (let i = 0; i <= width / 3; i++) {
    // console.log(i.length + 4);
    console.log("#", " ".repeat(width - 4), "#");
  }
  console.log("#".repeat(width));
}

// createRett(15);

// console.log("#".repeat(20));

// for (let i = " "; i.length; i++) {
//   console.log("#", i.repeat(16), "#");
//   console.log("#", i.repeat(16), "#");
//   console.log("#", i.repeat(16), "#");
//   console.log("#", i.repeat(16), "#");
// }
// console.log("#".repeat(20));

// # Consonants count
// ​
// Find the number of consonants in each of
// the words below and log it to the console.
// ​
// - Celebration
// - Rocket
// - Prediction
// - Thin

// sorry this is the good one

///
// SIMPLE STR SOLUTION
///

let strCon = "Celebration";

console.log(
  `${strCon} contains ${
    strCon.length - strCon.replace(/[aeiou]/gi, "").length
  } consonants`
);

///
// ARRAY SOLUTION
///

let arrCon = ["Celebration", "Rocket", "Prediction", "Thin"];

const calcCons = (arr) =>
  arr.map((x) =>
    console.log(
      `${x} contains ${x.length - x.replace(/[aeiou]/gi, "").length} consonats`
    )
  );

calcCons(arrCon);

// # c4n y0u r34d th15?
// ​
// Modify each of the example strings
// to a coded(h4ck3r 5p34k) version of the string.
// ​
// ** NB:** For your program to work properly,
// your program should replace all 'a's with 4,
// 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
// ​
// ## Examples:
// ​
// * javascript is cool ➞ j4v45cr1pt 15 c00l
// * programming is fun ➞ pr0gr4mm1ng 15 fun
// * become a coder ➞ b3c0m3 4 c0d3r

let arrToHack = ["javascript is cool", "programming is fun", "become a coder"];

const hackThis = (arr) =>
  arr.map((x) =>
    console.log(
      x
        .replace("a", 4)
        .replace("e", 3)
        .replace("i", 1)
        .replace("o", 0)
        .replace("s", 5)
    )
  );

// hackThis(arrToHack);

//         "£$%@
//        ##
//      °####°
//      ######
//    °########
//    ##########
//   ############
//  ##############
// ################

// # Object like array
// ​
// Use object literal syntax (e.g., `{ key: value, ... }`
// notation) to create an object that behaves as an
// array in a for statement.
// The object should contain at least 3 elements.
// You should place your code between the braces in the let statement:
// ​
// ```js
// let myArray = {
// };
// ​
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

let arrOfObjsNames = [];

const makeObj = (arr) => {
  arr.forEach((x) => {
    arrOfObjsNames.push({
      fName: x[0],
      age: x[1],
    });
  });
  console.log("My friends are:");
  arrOfObjsNames.map((x) => console.log(`${x.fName}, ${x.age} yrs old`));
};

// makeObj([
//   ["marco", 29],
//   ["giorgos", 20],
//   ["naimah", 18],
// ]);

// console.log(arrOfObjsNames);

// console.log("singleObj", singleObj);

//These are your variables
// var myVar1 = "fanem";
// var myVar2 = "age";

// //The object holding all your dynamic variables
// var MyVarObj = {};

// //Create dynamic variables (object properties)
// MyVarObj[myVar1] = "value1";
// MyVarObj[myVar2] = "value2";

// console.log(MyVarObj); // {1: 'value1', 2: 'value2'}

// const makeMyObj = (firstName1, age1, firstName2, age2, firstName3, age3) => {
//   let fName;
//   let firstName;

//   console.log(fName);

//   for (let i = 0; i < 3; i++) {
//     // console.log(i + 1);
//     console.log(firstName + [i + 1]);
//     console.log(fName + [i + 1]);
//   }
// };

// console.log(makeMyObj("marco", 29, "giorgos", 20, "naimah", 18));

// Using JavaScript, check if the object
// is empty and print the result to the console.
// ​
// {} ➞ true
// ​
// { a: 1 } ➞ false

// let objToCheck = { a: 1 };
// objToCheck = {};

// const checkObjBoolean = (obj) => Object.keys(obj).length === 0;

// console.log(checkObjBoolean(objToCheck));

// if (Object.keys(objToCheck).length === 0) {
//   return true;
// } else {
//   return false
// }

// # Object values and keys
// ​
// - collect all the values of an object in an array
// - collect all the keys of an object in an array
// - print both collections to the console
// ​
// ## Sample object
// ​
// ```js
// {
//     id: 15,
//     firstName: 'Liana',
//     lastName: 'Gleason',
//     courses: ['6.945', '6.814', '1.012', '6.813', '2.159J', '15.S50'],

// Using JavaScript, find the object that has highest
// number of properties.You need to count only the top level properties.
// Print to the console the object with the highest
// number of properties and its number of properties.
// ​

const obj1 = {
  name: "Jane",
  age: 21,
  isEnrolled: true,
  courses: [],
  address: {
    street: "Boddinstr",
    houseNumber: 21,
    city: "Berlin",
  },
  grades: [],
};
const obj2 = {
  price: 1222,
  categories: [
    {
      id: 32,
      slug: "clothing",
      label: "Apparel",
    },
  ],
};
const obj3 = {
  title: "",
  author: "",
  createdAt: "",
  dateLastUpdated: "",
  isApproved: false,
};
const obj4 = {
  albumId: 1,
  id: 26,
  title: "asperiores nobis voluptate qui",
  url: "https://via.placeholder.com/600/474645",
  thumbnailUrl: "https://via.placeholder.com/150/474645",
  albumId1: 1,
  id1: 26,
  title1: "asperiores nobis voluptate qui",
  url1: "https://via.placeholder.com/600/474645",
  thumbnailUrl1: "https://via.placeholder.com/150/474645",
};
const obj5 = {
  postId: 1,
  id: 1,
  userId: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  title: "quidem molestiae enim",
  body:
    "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
};

// OK

//
///
/// the 4th

const checkPropLength1 = (objs) => {
  let highNum = { objName: "", propNum: 0 };

  objs.forEach((x, i) => {
    let countKey = "";
    for (var key in x) {
      if (x.hasOwnProperty(key)) {
        countKey += 1;
      }
    }
    if (countKey.length > highNum.propNum) {
      highNum.objName = "obj" + (i + 1);
      highNum.propNum = countKey.length;
    }
    countKey = 0;
  });

  console.log(highNum);
  console.log(`${highNum.objName} is the bigger with ${highNum.propNum}`);
};

// checkPropLength1([obj1, obj2, obj3, obj4, obj5]);
let arrOfObjs = [];

const checkPropLength = (objs) => {
  objs.forEach((x, i) => {
    arrOfObjs.push(["obj" + (i + 1), Object.keys(x).length]);
  });

  let sortArr = arrOfObjs.sort((a, b) => b[1] - a[1]);
  console.log(
    `${sortArr[0][0]} is the bigger with ${sortArr[0][1]} properties`
  );
};

// // checkPropLength([obj1, obj2, obj3, obj4, obj5]);

function domainName(url) {
  let domainName = "";
  // let toCut =
  //   url.includes("http://www.") || url.includes("https://www.") ? "." : "/";

  // console.log(
  //   url
  //     .split("")
  //     .splice(url.split("").indexOf(toCut) + 1, url.split("").length)
  //     .splice(url.split("").indexOf(".") + 1, url.split("").length)
  // );

  // domainName = url.slice(url.indexOf("/") + 2);
  // console.log(url.includes("http://www." || url.includes("https://www.")));

  if (url.includes("http://www.") || url.includes("https://www."))
    return (
      url
        // .slice(url.indexOf("/") + 6)
        .split("")
        .splice(url.split("").indexOf(".") + 1, url.split("").length)
        .slice(0, url.slice(url.indexOf("/")).indexOf("."))
    );

  return url
    .slice(url.indexOf("/") + 2)
    .slice(0, url.slice(url.indexOf("/") + 2).indexOf("."));

  // if (domainName.indexOf("/") === -1) return domainName;

  // domainName = domainName
  //   .split("")
  //   .splice(0, domainName.split("").indexOf("."))
  //   .join("");

  // console.log(domainName);

  // .reverse()
  // .splice(0, domainName.split("").reverse().indexOf("."))
  // .reverse();
  // .reverse().join();
  // .splice(
  //   0,
  //   url
  //     .slice(url.indexOf(".") + 2)
  //     .split("")
  //     .indexOf("/")
  // )
  // .join("");

  // return domainName;
}

// const domainName = (domain) => {
//   return domain
//     .slice(domain.indexOf("/") + 2)
//     .split("")
//     .splice(
//       0,
//       domain
//         .slice(domain.indexOf("/") + 2)
//         .split("")
//         .indexOf("/")
//     )
//     .join("");
// };

// console.log(domainName("http://google.com")); // "github";
// console.log(domainName("http://github.com/carbonfive/raygun")); // "github";
// console.log(domainName("http://www.github.com/carbonfive/raygun")); // "github";
// console.log(domainName("http://www.zombie-bites.com")); // "zombie-bites";
// console.log(domainName("https://www.cnet.com")); // "cnet";
