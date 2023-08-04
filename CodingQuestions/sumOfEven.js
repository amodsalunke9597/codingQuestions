let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function sumEven(filt) {
    return filt.reduce((acc, num) => {
        if (num % 2 === 0) {
            return acc + num; // Add the even number to the accumulator
        }
        return acc; // If the number is odd, just return the accumulator unchanged
    }, 0);
}

console.log(sumEven(arr));
