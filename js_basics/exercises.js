// Write a JavaScript program to check two numbers and return true 
// if one of the number is 100 or if the sum of the two numbers is 100.

    const isEqualTo100 = (a, b) => a === 100 && b === 100 || (a + b) === 100;

    console.log(isEqualTo100(100, 0));
    console.log(isEqualTo100(0, 100));
    console.log(isEqualTo100(50, 0));
    console.log(isEqualTo100(20, 80));
    console.log(isEqualTo100(100, 1));

// Write a JavaScript program to get the extension of a filename.

    const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

    console.log(getFileExtension('index.html'));

// Write a JavaScript program to replace every character in a given 
// string with the character following it in the alphabet.

    const replaceCharacters = (str) => 
        str
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');

    console.log(replaceCharacters('index'));

// Write a JavaScript program to get the current date.
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

    const getCurrentDate = () => {
        const date = new Date();
        const days = date.getUTCDate();
        const months = date.getUTCMonth() + 1;
        const years = date. getUTCFullYear();
        return `${days}/${months}/${years}`;
    } 

    console.log(getCurrentDate());

// Write a JavaScript program to create a new string
// adding "New!" in front of a given string.
// If the given string begins with "New!" already 
// then return the original string.

    const addNewString = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;

    console.log(addNewString('New! Something'));
    console.log(addNewString('Offer'));

// Write a JavaScript program to create a new string
// from a given string taking the first 3 characters 
// and the last 3 characters of a string and adding them
// together. The string length must be 3 or more,
// if not, the original string is returned.

    const makeNewString = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

    console.log(makeNewString('abc'));
    console.log(makeNewString('abcdef'));
    console.log(makeNewString('abc123abc123'));
    console.log(makeNewString('ab'));

// Write a JavaScript program to extract the first
// half of a string of even length.

    const extractString = (str) => str.slice(0, str.length / 2);

    console.log(extractString('helloo'));

// Write a JavaScript program to concatenate two strings
// expect their first character.    

    const concatStrings = (str1, str2) => str1.slice(1) + str2.slice(1);

    console.log(concatStrings('hello', 'world'));

// Given two values, write a JavaScript program to
// find out which one is nearest to 100.

    const numberNear100 = (num1, num2) => Math.abs(100 - num1) < Math.abs(100 - num2) ? `${num1} is closer to 100` : `${num2} is closer to 100`;

    console.log(numberNear100(89, 21));
    console.log(numberNear100(0, 21));
    console.log(numberNear100(101, 152));

// Write a JavaScript program to check a given
// string contains 2 to 4 occurrences of 
// a specified character.

    const countChars = (str, char) => 
        str.split('').filter(ch => ch === char).length;

    const contains2To4 = (str, char) =>
        countChars(str, char) >= 2 && countChars(str, char) <= 4;   

    console.log(countChars('hehehe', 'e'));
    console.log(contains2To4('heeeeeeelo', 'e'));
    console.log(contains2To4('heeeelo', 'e'));