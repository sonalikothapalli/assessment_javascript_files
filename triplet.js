let arr1 = [5, 12, 18, 9];
let arr2 = [10, 17, 13, 8];
let arr3 = [14, 16, 11, 5];
let tripletArray = [];

function maxNum(array) {
    let maximum = array[0]
    for (let item of array) {
        if (item > maximum) {
            maximum = item
        }
    }
    return maximum
}

function minNum(array) {
    let minimum = array[0]
    for (let item of array) {
        if (item < minimum) {
            minimum = item
        }
    }
    return minimum
}

function findingSum(array) {
    let sum = 0
    for (let item of array) {
        sum += item
    }
    return sum
}
for (let num1 of arr1) {
    for (let num2 of arr2) {
        for (let num3 of arr3) {
            myArray = [num1, num2, num3]
            tripletArray.push(myArray)
        }
    }
}
let differenceArray = [];
for (let item of tripletArray) {
    let maxNumber = maxNum(item)
    let minNumber = minNum(item)
    let difference = maxNumber - minNumber
    differenceArray.push(difference)
}
let minDifference = minNum(differenceArray)
let minDifferenceArray = []
let index = 0;
for (let num of differenceArray) {
    if (num == minDifference) {
        minDifferenceArray.push(tripletArray[index])
    }
    index += 1
}

let minDifferenceArrayLength = minDifferenceArray.length;
if (minDifferenceArrayLength == 1) {
    let itemIndex = differenceArray.indexOf(minDifference);
    console.log(tripletArray[itemIndex]);
} else {
    let sumArray = [];
    for (let num of minDifferenceArray) {
        let sumOfNums = findingSum(num)
        sumArray.push(sumOfNums);
    }
    let minSum = minNum(sumArray)
    let minSumIndex = sumArray.indexOf(minSum)
    console.log(minDifferenceArray[minSumIndex].join(","))
}