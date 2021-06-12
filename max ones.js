let firstArray = [0, 1, 1, 1];
let secondArray = [0, 0, 1, 1];
let thirdArray = [1, 1, 1, 1];
let fourthArray = [0, 0, 0, 0];
let countArray = [];
let newArray = [firstArray, secondArray, thirdArray, fourthArray]
let maxCount = 0;
for (let item of newArray) {
    count = 0
    for (let num of item) {
        if (num === 1) {
            count += 1
        }
    }
    if (count > maxCount) {
        maxCount = count
    }
    countArray.push(count)
}
let index = countArray.indexOf(maxCount);
console.log(index);