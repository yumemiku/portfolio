let myAge= 22;
//This is my age
let earlyYears = 2;
//This the first variable to let us calculate a dog's age
earlyYears *= 10.5;
let laterYears = myAge - 2;
//This will be used to calculate dog years for dogs that are more than 2 years old
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
//This will be your age in dog years
let myName = 'Daniela'.toLowerCase()
//This is my name in all lower case
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//This will log to the console your name, age in human years and age in dog years.