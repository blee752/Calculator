let inputValue = null; //stores all of the inputs as a string
let answer = null; //stores the value of the operations. Update as more inputs are being entered
function add(b) {
    //add numbers
    return answer+b;
}

function subtract(b) {
    //subtract numbers
    return answer-b;
}

function multiply(b){
    //multiply numbers
    return answer*b;
}

function divide(b) {
    //divide numbers
    return answer/b;
}

function operate(operator, n2) {
    let result = 0;
    switch(operator) {
        case '+':
            result = add(n2);
            break;
        case '−':
            result = subtract(n2);
            break;
        case 'x':
            result = multiply(n2);
            break;
        case '/':
            result = divide(n2);
            break;
        }   
        answer = result;
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
            let splitStr = inputValue.split(' '); 
            stringEval(splitStr[splitStr.length - 2], input.value);
        }
        }
        
        if(inputValue === null){
            let currentVal = input.value;
            currentVal +=  ` ${e.target.innerText} `;
            inputValue = currentVal;
            answer = input.valueAsNumber;
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

function stringEval (operator, strNum) {
   operate(operator, Number(strNum));
}
