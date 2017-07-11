console.log('hello old friend');

//demonstrate basic variable types

//holding a string
let month = "july";
console.log('this month is', month);

//holding an expression
let hoursInYear = 24 * 365;
console.log('hoursInYear:', hoursInYear);

//holding an expression evaluating a variable
let minsInDecade = (hoursInYear * 60) * 10;
console.log('minsInDecade:', minsInDecade);

//holding a number
let age = 8;

//doing some math
let secondsInYear = hoursInYear * 60 * 60;

//doing math with variables
let ageInSeconds = secondsInYear * age;
console.log('ageInSeconds', ageInSeconds);

//explaining indexed value a bit
let myShoppingList = ['fruit', 'milk', 'peanut butter', 'avacado']
console.log('the second item', myShoppingList[1]);

//type coercion
let newValue = "2" * 2;
console.log('what is the value:', newValue);

//conditional logic
let wiseAge = 45;

if (age > wiseAge){
    console.log('youare very wise');
} else {
    console.log('you are too young to be wise');
}

//writing to the DOM
let phrase = "The quick brown fox jumps over the lazy dog";
let phraseHolder = document.getElementById("phrase");
//add a phrase
phraseHolder.innerHTML += phrase;

