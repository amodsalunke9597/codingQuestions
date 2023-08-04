

function second(arr) {
    console.log(arr);
    const firstLargestValue = Math.max(...arr);
    console.log(firstLargestValue);
    arr.splice(arr.indexOf(firstLargestValue), 2);
    console.log(arr);
    const secondLargestValue = Math.max(...arr);
    console.log(secondLargestValue);
}

let arr = [2,3,4,5,6,7];
console.log(second(arr));