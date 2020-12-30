const min = 1;
const max = 12;

//Arrow function to give random number between 1 to 12
random = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

let map = new Map([
    ['January', 0],
    ['February', 0],
    ['March', 0],
    ['April', 0],
    ['May', 0],
    ['June', 0],
    ['July', 0],
    ['August', 0],
    ['September', 0],
    ['October', 0],
    ['November', 0],
    ['December', 0]
]);
for (i = 1; i <= 50; i++) {
    var birthMonth = random(min,max);
    switch (birthMonth) {
        case 1:
            var value = map.get('January');
            map.set('January',++value);
            break;

        case 2:
            var value = map.get('February');
            map.set('February',++value);
            break;
        
        case 3:
            var value = map.get('March');
            map.set('March',++value);
            break;

        case 4:
            var value = map.get('April');
            map.set('April',++value);
            break;

        case 5:
            var value = map.get('May');
            map.set('May',++value);
            break;

        case 6:
            var value = map.get('June');
            map.set('June',++value);
            break;

        case 7:
            var value = map.get('July');
            map.set('July',++value);
            break;

        case 8:
            var value = map.get('August');
            map.set('August',++value);
            break;
        
        case 9:
            var value = map.get('September');
            map.set('September',++value);
            break;

        case 10:
            var value = map.get('October');
            map.set('October',++value);
            break;

        case 11:
            var value = map.get('November');
            map.set('November',++value);
            break;

        case 12:
            var value = map.get('December');
            map.set('December',++value);
            break;

        default:
            break;
    }
}

console.log(map);
map.forEach((value,key) => {
    console.log("There are " + value + " birthdays in month of " + key + ".");
});