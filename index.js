// Regular expressions also known as regex define a search pattern that can be used to search for things in a string.

// using the test method
let sentence = "The dog chased the cat";
let regex = /the/;
let result = regex.test(sentence);
console.log(result);

// Match literal strings
let waldoIsHiding = "Somewhere waldo is hiding in this text.";
let waldoRegex = /Waldo/;
result = waldoRegex.test(waldoIsHiding);
console.log(result);

// Matching a string with multiple possibilites
let petString = "James has a pet cat, bird and dog";
let petRegex = /dog|cat|fish/;
result = petRegex.test(petString);
console.log(result);

// ignore case while matching
let myName = "Dennis The Great";
let myRegex = /dennis the Great/i;
result = myRegex.test(myName);
console.log(result);

// extracting matches
let extractStr = "Extract the word coding from this String";
let codingRegex = /coding/;
result = extractStr.match(codingRegex);
console.log(result);

// find more than the first match
let testStr = "Jack, Jack, Jack and zaph";
let ourRegex = /Jack/g;
result = testStr.match(ourRegex);
console.log(result);

let twinkleStar = "Twinkle twinkle little star";
regex = /twinkle/gi;
result = twinkleStar.match(regex);
console.log(result);

// Matching anything with the wildcard period
let humStr = "I'll hum a song and hug a bear then run to the hut.";
let hugRex = /hu./g; //will take everything starting with hu
result = humStr.match(hugRex);
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
let alphabetRegex = /[a-z]/gi;
result = quoteSample.match(alphabetRegex);
console.log(result);

// Matching letters and numbers
let lettersNumbersStr = "The holy value of pi is 3.141592653, isn't it?";
let letsNumsRegex = /[2-6h-s]/gi; //matching the digits 2-6 and letters h-s in the string
result = lettersNumbersStr.match(letsNumsRegex);
console.log(result);

// Match characters not specified
let rmString = "3 blind mice";
let rmRegex = /[^0-9aeiou]/gi;
result = rmString.match(rmRegex);
console.log(result);

// match characters that occur one or more times
let difficultSpelling = "Mississippi";
let spregex = /s+/g;
result = difficultSpelling.match(spregex);
console.log(result);

// Match characters that occur zero or  more times
let soccerWord = "goooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

// lazy match and greedy match
let string = "titanic";
let greedyDefaultRegex = /t[a-z]*i/;
let lazyRegex = /t[a-z]*?i/;
console.log(string.match(greedyDefaultRegex));
console.log(string.match(lazyRegex));

let text = "<h1>Winter is coming </h1>";
//we want to match the first <h1> only
let tagRegex = /<.*?>/;
result = text.match(tagRegex);
console.log(result);

// CHALLENGE: FIND CRIMINALS IN A HUNT.

// A group of criminals escaped from jail and ran away, you don't know how many but you do know that they do stay together when they are around other people., you are responsible for finding all the criminals at once, the criminals are respresented by a c. Your task is to write a regex that will match anytime there is one or more c's. in the string that is passed in.

let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /c+/gi;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// match beginning string pattern
let rickyAndCal = "Cal and Ricky both like racing";
let calRegex = /^Cal/;
result = calRegex.test(rickyAndCal);
console.log(result); //true

// Match ending string pattern
let caboose = "The last car on the train is a caboose";
let lastRegex = /caboose$/;
result = lastRegex.test(caboose);
console.log(result);

// Match all letters and numbers
let quoteSample2 = "The 5 boxing wizards jump quickly.";
let alphabetRegex2 = /\w/g;
result = quoteSample2.match(alphabetRegex2);
console.log(result);

// Match everything except letters and numbers
let quoteSample3 = "The 5 boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
result = quoteSample3.match(nonAlphabetRegex);
console.log(result);

// Match all numbers
let numString = "Your sandwich will cost $5.00";
let numRegex = /\d/g;
result = numString.match(numRegex);
console.log(result);

// Match all non-numbers
let numString2 = "Your sandwich will cost $5.00";
let numRegex2 = /\D/g;
result = numString2.match(numRegex2);
console.log(result); //['5', '0', '0']

// CHALLENG: CREATE A REGEX FOR VALIDATING USERNAMES
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; //change this line
result = userCheck.test(username);
console.log(result);

// Match whitespace
let sample = "Whitespace is important in seperating words";
let regSampleSpace = /\s/g;
result = sample.match(regSampleSpace);
console.log(result);

// Match non-whitespace characters
let sample2 = "Whitespace is important in seperating words";
let regSampleSpace2 = /\S/g;
result = sample2.match(regSampleSpace2);
console.log(result);

// Specify upper and lower number of matches
let ohStr = "ohhh no";
let ohRegex = /Oh{2, 6} no/;
result = ohRegex.test(ohStr);
console.log(result);

// specify only lower number of matches
let haStr = "Hazzzzah";
let haRegex = /z{4,}/;
result = haRegex.test(haStr);
console.log(result);

// Specify the exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
result = timRegex.test(timStr);
console.log(result);

// Check for all or none

let favWord = "Favorite";
let favRegex = /Favou?rite/; // We are saying it may have a u or it may not have a u
result = favRegex.test(favWord);
console.log(result);

// positive and negative lookaheads
let quit = "qu";
let noquit = "qt";
let quRegexPositive = /q(?=u)/;
// this will match letter q and then look if there is a u later in the string, if there is, then it will return the q
let qRegexNegative = /q(?!u)/;
// this will match q and then check if there is no u later in the string and if there is none, it will match the q, if there is, then it will not match it
console.log(quit.match(quRegexPositive));
console.log(noquit.match(qRegexNegative));

// reuse patterns using capture groups
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
// we are repeating (\w+) 1 times if we had another group, we could repeat that with \2
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));

// Remove whitespaces at the beginning and at the end
let hello = " Hellow, World! ";
let wsRegex = /^\s+|\s+$/g;
result = hello.replace(wsRegex, "");
console.log(result);
