const min = 1;
const max = 6;

//Arrow function to generate random number between 1 to 6
random = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

let map = new Map();
var count = min;
while(count <= max) {
    map.set(count,0);
    count++;
}

var indexOfMax;
var indexOfMin;
var stayInLoop = true; 
while (stayInLoop) {
    var diceFace = random(min,max);
    switch (diceFace) {
        case 1:
            var value = map.get(1);
            map.set(1,++value);
            break;

        case 2:
            var value = map.get(2);
            map.set(2,++value);
            break;
        
        case 3:
            var value = map.get(3);
            map.set(3,++value);
            break;

        case 4:
            var value = map.get(4);
            map.set(4,++value);
            break;

        case 5:
            var value = map.get(5);
            map.set(5,++value);
            break;

        case 6:
            var value = map.get(6);
            map.set(6,++value);
            break;

        default:
            break;
    }

    for (i = min; i <= max; i++) {
        var value = map.get(i);
        if (value == 10) {
            indexOfMax = i;
            stayInLoop = false;
        }
    }
}

console.log(map);
console.log("Number having Maximum times is " + indexOfMax);

var valuesArray = new Array();
for (i = min; i <= map.size; i++) {
    var value = map.get(i);
    valuesArray.push(value);
}

var minValue = Math.min(...valuesArray);
for (i = min; i <= map.size; i++) {
    var value = map.get(i);
    if (minValue == value) {
        indexOfMin = i;
    }
}

console.log("Number having Minimum times is " + indexOfMin);