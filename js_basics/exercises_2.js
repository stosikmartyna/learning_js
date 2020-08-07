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

// Given a year, report if it is a leap year.

    const leapYear = (year) => (year % 4 == 0);

    console.log(leapYear(2020));
    console.log(leapYear(2019));

// Write a JavaScript program to generate a random hexadecimal
// color code.

    const generateHex = () => Math.floor(Math.random()*16777215).toString(16);

    console.log(`#${generateHex()}`);
    console.log(`#${generateHex()}`);
    console.log(`#${generateHex()}`);

// Write a JavaScript function that returns
// a passed string with letters in alphabetical
// order.

    const alphabeticalOrder = (str) => str.split('').sort().join('');

    console.log(alphabeticalOrder('cucumber'));

// Write a JavaScript function that accept 
// a string as a parameter and counts 
// the number of vowels within the string.

    const countVowels = (str) => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

    console.log(countVowels('bananaandpineapple'));

// Write a JavaScript function to extract
// unique characters from a string. 

    const makeUnique = (str) => String.prototype.concat(...new Set(str));
    const makeUnique2 = (str) => [... new Set(str.split(''))];

    console.log(makeUnique('aaaassssddefff'));
    console.log(makeUnique2('aaaassssddefff'));

//Write a JavaScript function to find
// the first not repeated character.

    const findChar = (str) => 
        str.split('')
            .filter((item, i, arr) => 
                arr.filter(arrItem => arrItem === item).length === 1
            );

    console.log(findChar('abbacddec'));