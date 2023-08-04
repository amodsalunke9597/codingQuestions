function missingNumber(arr) {
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    let missing= [];

    for(let i=minValue; i<=maxValue; i++){
        if(arr.indexOf(i)<0){
            missing.push(i)
        }
    }
    return missing;
}

let arr = [1,2,3,6,7,8,9]
console.log(missingNumber(arr));