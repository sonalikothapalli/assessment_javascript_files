let myArray = [3, 3, 4, 2, 4, 4, 2, 4]
let lengthOfArray = myArray.length;
let ArrayWithUniqueEle = [];
for (let item of myArray) {
    let condition = ArrayWithUniqueEle.includes(item);
    if (!condition) {
        ArrayWithUniqueEle.push(item)
    }
}
let countArray = [];
for (let num of ArrayWithUniqueEle) {
    let value = myArray.length / 2;
    let count = 0;
    for (let item of myArray) {
        if (item === num) {
            count += 1
        }
    }
    if (count > value) {
        countArray.push(num)
    }
}
if (countArray.length === 0) {
    console.log("No Majority Element");
} else {
    console.log(countArray.join(" "));
}