# Regular Expressions (JS)
[Let's connect on LinkedIn](https://www.linkedin.com/in/otwoma)
***
**Using the match method**
```Javascript
let sentence = "The dog chased the cat";
let regex = /the/;
let result = regex.test(sentence);
console.log(result); //true
```
***

**Match literal strings**
```Javascript
let waldoIsHiding = "Somewhere waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result);//false due to Waldo and not waldo
```
***

**Match a literal string with different possibilities**

regex has an or operator which is a single pipe character. If any of the provided possibilites is in the literal string, the test returns true.
```javascript
let petString = "James has a pet cat, bird and dog"
let petRegex = /dog|cat|fish/;
let result = petRegex.test(petString);
console.log(result); //returns true even though fish is not there
```
***

**Ignore case while matching**

We can provide a flag to match both upper and lowercase.

The i flag ignores case.
```javascript
let myName = "Dennis The Great";
let myRegex = /dennis the Great/i;
let result = myRegex.test(myName);
console.log(result); //true
```
***

**Extract matches**

So far, we have been checking if a pattern exists in a string or not.

We can also extract the matches we find with the ```match``` method.

```javascript
let extractStr = "Extract the word coding from this String";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result);//["coding"]
```
***
**Find more than the first match**

We can search and extract a pattern more than once using the g flag
```javascript
let testStr = "Jack, Jack, Jack and zaph";
let ourRegex = /Jack/g;
let result = testStr.match(ourRegex);
console.log(result);//[ 'Jack', 'Jack', 'Jack' ]
```


_i and g flag working together_
```javascript
let twinkleStar = "Twinkle twinkle little star";
let regex = /twinkle/ig;
let result = twinkleStar.match(regex);
console.log(result);//[ 'Twinkle', 'twinkle' ]
```
***

**Match anything with the wildcard period**

In regex, a period is a wildcard character, it can stand for anything.
```javascript
let humStr = "I'll hum a song and hug a bear then run to the hut."
let hugRex = /hu./g; //will take everything starting with hu
let result = humStr.match(hugRex)
console.log(result);//[ 'hum', 'hug', 'hut' ]
```
matching anything that ends with un and starts with any other letter using the wildcard period
```javascript
let exampleStr = "let's run and have fun but not with the gun and the trun";
let unReg = /.un/g;
let result = exampleStr.match(unReg);
console.log(result); //[ 'run', 'fun', 'gun' ]
```
***
**Match single character with multiple possiblities**

We can also match from a predefined group of characters.
```Javascript
let bgStr = "Beware of the big bug in your bag but don't beg.";
let bgRegex = /b[aeiu]g/g;
let result = bgStr.match(bgRegex);
console.log(result); //[ 'big', 'bug', 'bag', 'beg' ]
```
***
**Match letters of the alphabet**
```javascript
let quoteSample = "The quick brown fox jumped over the lazy dog";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);
console.log(result);//['T', 'h', 'e', 'q', 'u', 'i', 'c','k', 'b', 'r', 'o', 'w', 'n', 'f','o', 'x', 'j', 'u', 'm', 'p', 'e','d', 'o', 'v', 'e', 'r', 't', 'h','e', 'l', 'a', 'z', 'y', 'd', 'o','g']
```
***

**Match numbers and letters of the alphabet**
```javascript
let lettersNumbersStr = "The holy value of pi is 3.141592653, isn't it?";
let letsNumsRegex = /[2-6h-s]/ig;//matching the digits 2-6 and letters h-s in the string
let result = lettersNumbersStr.match(letsNumsRegex);
console.log(result);//['h', 'h', 'o', 'l', 'l','o', 'p', 'i', 'i', 's','3', '4', '5', '2', '6','5', '3', 'i', 's', 'n','i']
```
***

**Match single characters not specified**

We can also create a set of characters that we DON'T want to match

These are called negated charater sets and they are created with the caret character ^

```javascript
//Matching everything except all numbers and all vowels
let rmString = "3 blind mice";
let rmRegex = /[^0-9aeiou]/ig;
let result = rmString.match(rmRegex);
console.log(result);//[' ', 'b', 'l', 'n', 'd', ' ', 'm','c']
```
***


