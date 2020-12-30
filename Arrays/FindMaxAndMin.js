const max = 999;
const min = 100;

//Arrow function which returns random 3 digit number
random = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

//Creating Array with random 3 digit numbers
var numberArray = new Array();
for (var i = 0; i < 10; i++) {
    numberArray.push(random(min,max));
}
console.log(numberArray);

console.log("--------------------------");

//Finding Maximum Value using Math.max() function
var maxValue = Math.max(...numberArray);
console.log("Maximum Value: " + maxValue);

//Collecting index of Values except Maximum Value
var indexArray = new Array();
for (index = 0; index < numberArray.length; index++) {
    if (!(numberArray[index] == maxValue)) {
        indexArray.push(index);
    }
}

//Storing collected index in varaible
var iterator = indexArray.values();

//Creating new Array which has all values except Maximum Value
var newNumberArray = new Array();
for (let element of iterator) {
    newNumberArray.push(numberArray[element]);
}

//Finding Maximum Value using Math.max() function
var secondMaxValue = Math.max(...newNumberArray);
console.log("Second Maximum Value: " + secondMaxValue);

console.log("--------------------------");

//Finding Minimum Value using Math.min() function
var minValue = Math.min(...numberArray);
console.log("Minimum Value: " + minValue);

//Collecting index of Values except Minimum Value
var indexArray = new Array();
for (index = 0; index < numberArray.length; index++) {
    if (!(numberArray[index] == minValue)) {
        indexArray.push(index);
    }
}

//Storing collected index in varaible
var iterator = indexArray.values();

//Creating new Array which has all values except Minimum Value
var newNumberArray = new Array();
for (let element of iterator) {
    newNumberArray.push(numberArray[element]);
}

//Finding Minimum Value using Math.min() function
var secondMinValue = Math.min(...newNumberArray);
console.log("Second Minimum Value: " + secondMinValue);