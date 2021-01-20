## printDay

- this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

`printDay(4); // "Wednesday" printDay(41); // undefined`

## lastElement

- this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

`lastElement([1,2,3,4]); // 4 lastElement([]); // undefined`

## number Compare

- this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

`numberCompare(1,1); // "Numbers are equal"`
`numberCompare(2,1); // "First is greater"`
`numberCompare(1,2); // "Second is greater"`

## singleLetterCount

this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

`singleLetterCount('amazing','A'); // 2 singleLetterCount('DCI School','o'); // 2`

**Bonus**

## tipCalculator

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
   4.3. Call the function with the 'totals' array

## multipleLetterCount

-this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

`multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}`
`multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}`

- this function should take in at most four parameters (an array, command, location, and value).

  -If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)

  -If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)

  -If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.

  -If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

`arrayManipulation([1,2,3], "remove", "end"); // 3`
`arrayManipulation([1,2,3], "remove", "beginning"); // 1`
`arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]`
`arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]`
