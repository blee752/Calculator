let inputValue = null; //stores all of the inputs as a string
let answer = null; //stores the value of the operations. Update as more inputs are being entered
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
const input = document.querySelector('input');
const numbt = document.querySelectorAll('.num');
const bt = document.querySelectorAll('.operator');
console.log()
bt.forEach(bt => {
    bt.addEventListener('click', (e) => {
        if(inputValue !== null){
            if (inputValue.split(' ').length >= 3) {
            //send it to a function to calculate current value + previous digit
        }
        }
        
        if(inputValue === null){
            let currentVal = input.value;
            currentVal +=  ` ${e.target.innerText} `;
            inputValue = currentVal;
            clear();
        }
        else {
        let currentVal = input.value;
        currentVal +=  ` ${e.target.innerText} `;
        inputValue += currentVal;
        console.log(currentVal);
        clear();
        console.log(inputValue);
        }

        /* if() run the check before adding onto the string */

    })
});

function clear() {
    input.value = null;
}

/*on click functions
 check if the string has an operator and 2 number already (split the string and see if length =2 or less)
    if =2, send string to operator. If <2 add operator value to string




*/
numbt.forEach(button => {
    button.addEventListener('click', (e) => {
        let str = input.value;
        str += e.target.innerText;
        input.value = str;
    })
})



function strEval (str) {

}

