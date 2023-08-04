function isPrime(num){
    if (num <= 1) {
        return false;
      }
    for(let i=2; i<num; i++){
         if(num % i === 0){
            return false
         }
    }
    return true;
}

function primeNumber(prev, curr){
    let arr = []
    for(let i=prev; i<curr; i++){
        if(isPrime(i)){
            arr.push(i)
         }
    }

    return arr;
}

console.log(primeNumber(1, 100)); 
