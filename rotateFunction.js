let myArray = [1, 2, 3, 4, 5];
let d = 2;
let n = 5;

function rotate(myArray, d, n) {
    d = d % n
    let firstPart = myArray.slice(0, d);
    let secondpart = myArray.slice(d, n);
    let resultArray = secondpart.concat(firstPart);
    let result = resultArray.join(" ");
    console.log(result);
}
rotate(myArray, d, n);