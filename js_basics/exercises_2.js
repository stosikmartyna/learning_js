// Write a JavaScript program to find the number
// of even digits in an array of integers.

    const findNumberInArray = (arr) => arr.filter(num => num % 2 === 0).length;

    console.log(findNumberInArray([1, 2, 3, 4, 5, 6]));

// Write a JavaScript program to get the largest 
// even number from an array of integers.

    const getLargestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0));

    console.log(getLargestEven([1, 2, 3, 4, 5, 6]));

// Write a JavaScript program to replace the first
// digit in a string (should contains at least digit)
// with $ character.

    const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$');

    console.log(replaceFirstDigit('a1b2c3'));