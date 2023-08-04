
function findMax(arr) {
   return arr.reduce((prev ,curr) => {
        return prev>curr? prev:curr
    })
}

const arr = [1, 2, 3, 4, 4, 5];
console.log(findMax(arr));