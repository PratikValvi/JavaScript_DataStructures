let numberArray = [0,-1,2,-3,1,4,-2];
var arrayLength = numberArray.length;

var tripletArray = new Array();
for (var i = 0; i < arrayLength-2; i++) {
    for (var j = i+1; j < arrayLength-1; j++) {
        for (var k = j+1; k < arrayLength; k++) {
            if (numberArray[i]+numberArray[j]+numberArray[k] == 0) {
                var tempArray = new Array();
                tempArray.push(numberArray[i]);
                tempArray.push(numberArray[j]);
                tempArray.push(numberArray[k]);
                tripletArray.push(tempArray);
            }
        }
    }
}

console.log(tripletArray);