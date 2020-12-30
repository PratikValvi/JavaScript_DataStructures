const min = 1;
const max = 100;

var myArray = new Array();
for (let i = min; i < max; i++) {
    if (i%11 == 0) {
        myArray.push(i);
    }
}

console.log(myArray);