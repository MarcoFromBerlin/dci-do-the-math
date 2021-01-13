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
