
function findDuplicate(arr) {
    let sortedArray = arr.slice().sort();
    let results = [];

    for(let i=0; i<=sortedArray.length-1; i++){
        if(sortedArray[i+1] === sortedArray[i]){
            results.push(sortedArray[i])
        }
    }

    return results;
}

const arr = [1, 2, 3, 4, 4, 5];
console.log(findDuplicate(arr));



