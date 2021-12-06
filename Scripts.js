function add(a,b) {
    //add numbers
    return a+b;
}

function subtract(a,b) {
    //subtract numbers
    return a-b;
}

function multiply(a,b){
    //multiply numbers
    return a*b;
}

function divide(a,b) {
    //divide numbers
    return a/b;
}

function operate(operator, n1,n2) {
    let result = 0;
    switch(operator) {
        case '+':
            result = add(n1,n2);
            break;
        case '-':
            result = subtract(n1,n2);
            break;
        case '*':
            result = multiply(n1,n2);
            break;
        case '/':
            result = divide(n1,n2);
            break;
        }   
}


/* const bt = document.querySelectorAll('.operator');
bt.forEach(bt => {
    bt.addEventListener('')
}) */