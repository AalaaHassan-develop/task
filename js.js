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