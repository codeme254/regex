# Regular Expressions (JS)

[Let's connect on LinkedIni -> Otwoma Dennis](https://www.linkedin.com/in/otwoma)

---

**Using the match method**

```Javascript
let sentence = "The dog chased the cat";
let regex = /the/;
let result = regex.test(sentence);
console.log(result); //true
```

---

**Match literal strings**

```Javascript
let waldoIsHiding = "Somewhere waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result);//false due to Waldo and not waldo
```

---

**Match a literal string with different possibilities**

regex has an or operator which is a single pipe character. If any of the provided possibilites is in the literal string, the test returns true.

```javascript
let petString = "James has a pet cat, bird and dog";
let petRegex = /dog|cat|fish/;
let result = petRegex.test(petString);
console.log(result); //returns true even though fish is not there
```

---

**Ignore case while matching**

We can provide a flag to match both upper and lowercase.

The i flag ignores case.

```javascript
let myName = "Dennis The Great";
let myRegex = /dennis the Great/i;
let result = myRegex.test(myName);
console.log(result); //true
```

---

**Extract matches**

So far, we have been checking if a pattern exists in a string or not.

We can also extract the matches we find with the `match` method.

```javascript
let extractStr = "Extract the word coding from this String";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result); //["coding"]
```

---

**Find more than the first match**

We can search and extract a pattern more than once using the g flag

```javascript
let testStr = "Jack, Jack, Jack and zaph";
let ourRegex = /Jack/g;
let result = testStr.match(ourRegex);
console.log(result); //[ 'Jack', 'Jack', 'Jack' ]
```

_i and g flag working together_

```javascript
let twinkleStar = "Twinkle twinkle little star";
let regex = /twinkle/gi;
let result = twinkleStar.match(regex);
console.log(result); //[ 'Twinkle', 'twinkle' ]
```

---

**Match anything with the wildcard period**

In regex, a period is a wildcard character, it can stand for anything.

```javascript
let humStr = "I'll hum a song and hug a bear then run to the hut.";
let hugRex = /hu./g; //will take everything starting with hu
let result = humStr.match(hugRex);
console.log(result); //[ 'hum', 'hug', 'hut' ]
```

matching anything that ends with un and starts with any other letter using the wildcard period

```javascript
let exampleStr = "let's run and have fun but not with the gun and the trun";
let unReg = /.un/g;
let result = exampleStr.match(unReg);
console.log(result); //[ 'run', 'fun', 'gun' ]
```

---

**Match single character with multiple possiblities**

We can also match from a predefined group of characters.

```Javascript
let bgStr = "Beware of the big bug in your bag but don't beg.";
let bgRegex = /b[aeiu]g/g;
let result = bgStr.match(bgRegex);
console.log(result); //[ 'big', 'bug', 'bag', 'beg' ]
```

---

**Match letters of the alphabet**

```javascript
let quoteSample = "The quick brown fox jumped over the lazy dog";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
console.log(result); //['T', 'h', 'e', 'q', 'u', 'i', 'c','k', 'b', 'r', 'o', 'w', 'n', 'f','o', 'x', 'j', 'u', 'm', 'p', 'e','d', 'o', 'v', 'e', 'r', 't', 'h','e', 'l', 'a', 'z', 'y', 'd', 'o','g']
```

---

**Match numbers and letters of the alphabet**

```javascript
let lettersNumbersStr = "The holy value of pi is 3.141592653, isn't it?";
let letsNumsRegex = /[2-6h-s]/gi; //matching the digits 2-6 and letters h-s in the string
let result = lettersNumbersStr.match(letsNumsRegex);
console.log(result); //['h', 'h', 'o', 'l', 'l','o', 'p', 'i', 'i', 's','3', '4', '5', '2', '6','5', '3', 'i', 's', 'n','i']
```

---

**Match single characters not specified**

We can also create a set of characters that we DON'T want to match

These are called negated charater sets and they are created with the caret character ^
Watch How to Train Your Dragon Homecoming (2019).mp4
Watch How to Train Your Dragon Snoggletog Log (2019).mp4
Watch Riverdance The Animated Adventure (2021).mp4

```javascript
//Matching everything except all numbers and all vowels
let rmString = "3 blind mice";
let rmRegex = /[^0-9aeiou]/gi;
let result = rmString.match(rmRegex);
console.log(result); //[' ', 'b', 'l', 'n', 'd', ' ', 'm','c']
```

---

**Match characters that occur one or more times**

We can check if a character occures one or more times using the + character

```Javascript
let difficultSpelling = "Mississippi";
let regex = /s+/g;
let result = difficultSpelling.match(regex);
console.log(result) // [ 'ss', 'ss' ]
```

**Match characters that occure zero or more times**

There is an option to match characters that occur zero or more times.

we use the \* character to match zero or more times

```Javascript
let soccerWord = "goooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex)) // ['gooooooo']
console.log(gPhrase.match(goRegex)) // ['g']
console.log(oPhrase.match(goRegex)) // null
```

---

**Find characters with lazy matching**

Greedy match finds the longest possible part of the string that matches the pattern and returns it as a match.

Lazy match finds the smallest possible part of the string and returns that.

Regex patterns default to greedy, i.e they find the longes match and return it.

We use a question mark to define a lazy match.

```javascript
let string = "titanic";
let greedyDefaultRegex = /t[a-z]*i/;
let lazyRegex = /t[a-z]*?i/;
console.log(string.match(greedyDefaultRegex)); // ['titani'] --> longest possible match
console.log(string.match(lazyRegex)); // ['ti'] --> has returned shortest possible match
```

```js
let text = "<h1>Winter is coming </h1>";
//we want to match the first <h1> only
let myRegex = /<.*?>/;
let result = text.match(myRegex);
console.log(result); // ['<h1>']
```

---

## Challenge - Find criminals in a hunt.

### A group of criminals escaped from jail and ran away, you don't know how many but you do know that they do stay together when they are around other people., you are responsible for finding all the criminals at once, the criminals are respresented by a c. Your task is to write a regex that will match anytime there is one or more c's. in the string that is passed in.

```js
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /./;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
```

## _solution_

```js
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /c+/gi;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
```

---

**Match beginning string patterns**

You can match patterns that are only at the begginning of a string.

The caret ^ character inside a character set [^] is used to create a negated character set.

If we are not in the character set, we can use the caret to only match at the beginning of a string.

```js
let rickyAndCal = "Cal and Ricky both like racing";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result); //true
```

---

**Match ending string patterns**

Caret matches the beginning string pattern and a dollar sign ($) matches an ending string pattern.

```js
let caboose = "The last car on the train is a caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
console.log(result); //true
```

---

**Match all letters and numbers**

\w is used to match the a-z A-Z 0-9 and underscore

```js
let quoteSample = "The 5 boxing wizards jump quickly.";
let alphabetRegex = /\w/g;
let result = quoteSample.match(alphabetRegex);
console.log(result); // ['T', 'h', 'e', '5', 'b', 'o', 'x', 'i', 'n', 'g', 'w', 'i', 'z', 'a', 'r', 'd', 's', 'j', 'u', 'm', 'p', 'q', 'u', 'i','c', 'k', 'l', 'y']
```

---

**Match everything except letters and numbers**

\W (uppercase w) will match anything that is not a letter, a number or an underscore.

```js
let quoteSample = "The 5 boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex);
console.log(result); // [ ' ', ' ', ' ', ' ', ' ', '.' ]
```

---

**Match all numbers**

\d matches digits only.

```js
let numString = "Your sandwich will cost $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex);
console.log(result); //['5', '0', '0']
```

---

**Match all non-numbers**

\D will match all non-numbers.

```js
let numString = "Your sandwich will cost $5.00";
let numRegex = /\D/g;
let result = numString.match(numRegex);
console.log(result); //['Y', 'o', 'u', 'r', ' ', 's', 'a', 'n', 'd', 'w', 'i', 'c', 'h', ' ', 'w', 'i', 'l', 'l', ' ', 'c', 'o', 's', 't', ' ', '$', '.']
```

---

## Restrict usernames

### Create a regex that can be used as a username validator

_rules_

1. If there are numbers, they must be at the end
2. Letters can be lowercase or uppercase
3. At least two characters long.
4. Two letter name can't have numbers.

Hint. : curly brace {} indicate the number of times the previous thing can match. The first arguement in the curly brace is the minimum and the second value is the maximum, leaving the maximum alone without specifying something means infinity eg {5,} means a minimum of 5 and maximum of inifinity

```js
let username = "JackOfAllTrades";
let userCheck = /change/; //change this line
let result = userCheck.test(username);
console.log(result);
```

_solution_

```js
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; //change this line
let result = userCheck.test(username);
console.log(result);
```

---

**Match whitespaces**

We can match whitespace characters with \s, this will match tabs, spaces, character feed and new line characters

```js
let sample = "Whitespace is important in seperating words";
let regSampleSpace = /\s/g;
let result = sample.match(regSampleSpace);
console.log(result); // [ ' ', ' ', ' ', ' ', ' ' ]
```

---

**Match non-whitespace character**

We use capital letters to match non-whitespace characters

```js
let sample = "Whitespace is important in seperating words";
let regSampleSpace = /\S/g;
let result = sample.match(regSampleSpace);
console.log(result); // ['W', 'h', 'i', 't', 'e', 's', 'p' 'a', 'c', 'e', 'i', 's', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', 'i', 'n', 's', 'e', 'p', 'e', 'r', 'a', 't', 'i', 'n', 'g', 'w', 'o', 'r', 'd', 's']
```

---

**Specify upper and lower number of matches**

You can specify the lower and upper number of matches with quantity specifiers.

Quantity specifiers are used with curly brackets with the first arguement being lower and the second upper

```js
let ohStr = "ohhh no";
let ohRegex = /Oh{3, 6} no/;
// This will match letter O then match h but only match if there is between 3 and 6 h
let result = ohRegex.test(ohStr);
console.log(result);
```

---

**Specify only lower number of matches**

```js
let haStr = "Hazzzzah";
let haRegex = /z{4,}/;
let result = haRegex.test(haStr); //true
console.log(result);
```

---

**Specify the exact number of matches**

We can also specify an exact number of matches

Here we use curly braces with only one arguement, no comma.

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
console.log(result); // true
```

---

**Check for all or none**

We can check for possible existence of an element with a question mark.

This checks for 0 or 1 of the preceding elements, it is kind of saying the previous element is optional

```js
let favWord = "Favorite";
let favRegex = /Favou?rite/; // We are saying it may have a u or it may not have a u
let result = favRegex.test(favWord);
console.log(result); // true
```

---

**Positive and negative lookahead**

Lookaheads are patterns that tell javascript to look ahead in your string to check for pattern further along.

This can be useful when we want to search for multiple patterns in a string.

There are positive look aheads and negative look aheads

= means positive and ! means negative lookahead

```js
let quit = "qu";
let noquit = "qt";
let quRegexPositive = /q(?=u)/;
// this will match letter q and then look if there is a u later in the string, if there is, then it will return the q
let qRegexNegative = /q(?!u)/;
// this will match q and then check if there is no u later in the string and if there is none, it will match the q, if there is, then it will not match it
console.log(quit.match(quRegexPositive)); //['q']
console.log(noquit.match(qRegexNegative)); //['q']
```

---

**Reuse patters using capture groups**

You can group things you are searching for in a parentheses.

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
// we are repeating (\w+) 1 times if we had another group, we could repeat that with \2
// This is instead of /(\w+)\s(\w+)/
console.log(repeatRegex.test(repeatStr)); // true
console.log(repeatStr.match(repeatRegex)); // ["regex regex", "regex"];
// we have "regex regex" for the original match i.e (\w+)\s which was to match any number of alphabets and then a space and then we have the "regex" since the patter (\w+) in the capture group was repeated but this time without a space
```

_In the example below, we use capture groups to match numbers that have been repeated only three times in a string each seperated by a space_

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
console.log(result); // returns true  for any group of three numbers
```

---

**Use capture groups to find and replace**

You can search and replace using js replace function by harnessing the power of regex.

The first input is the regex pattern and the second the string to replace.

```js
let wrongText = "The sky is silver";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// we can also access capture groups with dollar signs
"Code Camp".replace(/(\w+)\s(w+)/, "$2 $1");
// Returns camp code
// $2 points to Camp and $1 points to code
```

---

**Remove whitespace from start and end**

```js
let hello = " Hello, World! ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
console.log(result); // Hello, World!
```

---

# _fin (The End)_
