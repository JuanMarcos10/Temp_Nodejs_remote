console.clear();
let array = [1, 3, 4, 2, 5];

function sum (array) {
    let result = 0;
    for (let i = 0 ; i < array.length ; i++) {
        result += array[i];
    }
    return result;
}

console.log(sum(array));
console.log(array);
