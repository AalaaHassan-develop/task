/*task 1*/
function calculator(a,b,operator){
    if(operator=='+'){
        return a+b;
    }
    else if (operator=='-'){
        return a-b;
    }
    else if(operator=='*'){
        return a*b;
    }
    else if(operator=='/'){
        return a/b;
    }
    else {
        return "invaild operator"
    }
}
console.log(calculator(4,2,'+'));
console.log(calculator(4,2,'-'));
console.log(calculator(4,2,'*'));
console.log(calculator(4,2,'/'));
/*task 2*/
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));
/*task 3*/
function factorial(n) {
    if (n === 0 || n === 1) {
    return 1;
    } else {
    return n * factorial(n - 1);
    }
}

console.log(factorial(5));
