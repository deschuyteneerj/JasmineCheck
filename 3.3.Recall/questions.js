let selectElementsStartingWithA = (array) => {
    return array.filter((array) => array.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
}

let removeNullElements = (array) => {
    return array.filter(x => x !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter((elem) => !!elem || elem === 0);
}

let reverseWordsInArray = (array) => {
    return array.map((elem) => elem.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    return array.sort().flatMap((value, i) => array.slice(i+1).map( w => [w,value].sort()));
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3);
}

let addElementToBeginning = (array, element) => {
    return [element].concat(array);
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return [...string].splice(0, Math.round(string.length / 2)).join("");
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter((elem)=> elem == elem.split('').reverse().join('')).length;
}

let shortestWord = (array) => {
    return array.reduce((a, b) => a.length <= b.length ? a : b);
}

let longestWord = (array) => {
    return array.reduce((a, b) => a.length >= b.length ? a : b);
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

let repeatElements = (array) => {
    return [...array, ...array];

}

let stringToNumber = (string) => {
    return parseInt(string);
    // return +string;
}

let calculateAverage = (array) => {
    return array.reduce((a,b) => a + b, 0) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0, array.find(elem => elem > 5));
}

let convertArrayToObject = (array) => {
    let obj = {};
    for (let i = 0, length = array.length; i < length; i += 2) {
        obj[array[i]] = array[i+1];
    }
    return obj;
}

let getAllLetters = (array) => {
    return [... new Set(array.flatMap(el => el.split("")))].sort();
    // return Array.from(new Set(array.join(''))).sort();
}

let swapKeysAndValues = (object) => {
    let result = {};
    for(let key in object){
        result[object[key]] = key;
    }
    return result;
}

let sumKeysAndValues = (object) => {
    return Object.values(object).reduce((a, b) => a + b) + Object.keys(object).reduce((a, b) => parseInt(a) + parseInt(b));
    // return Object.keys(object).reduce((sum,key)=>sum+Number.parseInt(key)+parseInt(object[key]),0);
}

let removeCapitals = (string) => {
    return string.replace( /[^a-z ]/g,'');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return `0${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`;
}

let getDomainName = (string) => {
    return string.split(".").slice(0, string.split(".").length - 1).join(".").split("@").pop();
}

let titleize = (string) => {
    return string.replace(/((^|\. *)([a-z])|\b[a-z](?=[\w]{3}))/g, (firstLetter) => firstLetter.toUpperCase());
    // /(A|B)/ --> Put 2 different Regex into 1
    // (^|\. *)([a-z]) --> Recognize the first letter of a sentence and after a 'dot (.)' and a 'space ( )'.
    // \b[a-z](?=[\w]{3}) --> Recognize every word longer than 3 letters in the string.

    // Yannick:
    // return string
    // .split(/the\s|and\s/g)
    // .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    // .join("the ")
    // .replace("the the", "and the")
    // .split(". ")
    // .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    // .join(". ");
}

let checkForSpecialCharacters = (string) => {
    return /[^a-zA-z0-9]/g.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return (number==1 || number==0) ? 1: number * factorial(number - 1);
}

let findAnagrams = (string) => {
    if (string.length < 2 ) {
        return string;
    }
    
    let permutationsArray = [];  
      
    for (let i = 0; i < string.length; i++){
        let char = string[i];
    
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);
    
        for (let permutation of findAnagrams(remainingChars)){
            permutationsArray.push(char + permutation);
        }
    }
    return permutationsArray;

    //Yannick:
    // return anagram(string);

    // function anagram(str) {
    //     if (str.length === 1) return str;
    //     let anagrams = [];
    //     [...str].map((el) => {
    //         [...anagram(str.slice(1, str.length))].map((w) => anagrams.push(el + w));
    //         str = str.substr(1, str.length - 1) + el;
    //     });
    //     return anagrams;
    // }
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    return array.map(a => parseInt(a, 36) - 9).filter(a => a >= 0);
    //return array.map((el) => el.toUpperCase().charCodeAt(0) - 64);
}