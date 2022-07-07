// Regular expressions also known as regex define a search pattern that can be used to search for things in a string.

// using the test method
let sentence = "The dog chased the cat";
let regex = /the/;
let result = regex.test(sentence);
console.log(result)

// Match literal strings
let waldoIsHiding = "Somewhere waldo is hiding in this text.";
let waldoRegex = /Waldo/;
result = waldoRegex.test(waldoIsHiding);
console.log(result);

// Matching a string with multiple possibilites
let petString = "James has a pet cat, bird and dog"
let petRegex = /dog|cat|fish/;
result = petRegex.test(petString);
console.log(result)

// ignore case while matching
let myName = "Dennis The Great";
let myRegex = /dennis the Great/i;
result = myRegex.test(myName);
console.log(result);

// extracting matches
let extractStr = "Extract the word coding from this String";
let codingRegex = /coding/;
result = extractStr.match(codingRegex);
console.log(result)

// find more than the first match
let testStr = "Jack, Jack, Jack and zaph";
let ourRegex = /Jack/g;
result = testStr.match(ourRegex);
console.log(result);

let twinkleStar = "Twinkle twinkle little star";
regex = /twinkle/ig;
result = twinkleStar.match(regex);
console.log(result);

// Matching anything with the wildcard period
let humStr = "I'll hum a song and hug a bear then run to the hut."
let hugRex = /hu./g; //will take everything starting with hu
result = humStr.match(hugRex)
console.log(result);

let exampleStr = "let's run and have fun but not with the gun";
let unReg = /.un/g;
result = exampleStr.match(unReg);
console.log(result);

// match single character with multiple possibilities
let bgStr = "Beware of the big bug in your bag but don't beg.";
let bgRegex = /b[aeiu]g/g;
result = bgStr.match(bgRegex);
console.log(result);

// Match all the letters of the alphabet
let quoteSample = "The quick brown fox jumped over the lazy dog";
let alphabetRegex = /[a-z]/ig;
result = quoteSample.match(alphabetRegex);
console.log(result);

// Matching letters and numbers
let lettersNumbersStr = "The holy value of pi is 3.141592653, isn't it?";
let letsNumsRegex = /[2-6h-s]/ig;//matching the digits 2-6 and letters h-s in the string
result = lettersNumbersStr.match(letsNumsRegex);
console.log(result);

// Match characters not specified
let rmString = "3 blind mice";
let rmRegex = /[^0-9aeiou]/ig;
result = rmString.match(rmRegex);
console.log(result);