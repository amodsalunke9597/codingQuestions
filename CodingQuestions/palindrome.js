let name = 'Amma'

function palindrome(name) {
    let Name = name.toLowerCase();
    let reverse = Name.split("").reverse().join('');
    console.log(reverse);

    if(Name == reverse){
        console.log('given string is a palindrome');
    }else{
        console.log('not a palindrome string');
    }
}

console.log(palindrome(name));