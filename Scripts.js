let inputValue = null; //stores all of the inputs as a string
let answer = null; //stores the value of the operations. Update as more inputs are being entered
let prevNum = null;

const history = document.querySelector('.history');
const clearBt = document.querySelector('.is-clear');
const delBt = document.querySelector('.is-del');
const input = document.querySelector('input');
const numbt = document.querySelectorAll('.num');
const bt = document.querySelectorAll('.operator');


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
            answer = result;
            break;
        case '−':
            result = subtract(n2);
            answer = result;
            break;
        case 'x':
            result = multiply(n2);
            answer = result;
            break;
        case '/':
            result = divide(n2);
            answer = result;
            break;
        case '=':
            inputValue += answer;
            break;
        }   
        prevNum = n2;
}


clearBt.addEventListener('click', (e) => {
    fullClear();
})

delBt.addEventListener('click', (e) => {
    let updatedNum = input.value;
    updatedNum = updatedNum.substring(0,updatedNum.length -1);
    input.value = updatedNum;
})


bt.forEach(bt => {
    bt.addEventListener('click', (e) => {
        if(inputValue !== null){ //if a inputValue is not null, previous inputs have been inserted into the calculator
            if (inputValue.split(' ').length >= 3) { //checks if a number and operator are in the history variable
            //send it to a function to calculate current value + previous digit
            let splitStr = inputValue.split(' '); 
            stringEval(splitStr[splitStr.length - 2], input.value);
        }}

        if(inputValue === null){ //first pass, assign inputValue to current value in the display
            if(input.value === ''){
                history.innerText = '0 =';
                input.value = 0;
                return;
            }
            let currentVal = input.value;
            prevNum = Number(input.value);
            currentVal +=  ` ${e.target.innerText} `;
            inputValue = currentVal;
            answer = input.valueAsNumber;
            history.innerText = inputValue;
            clear();
        }
        else { //second and onwards pass, add input value along with the new input
        let currentVal = input.value;
        currentVal +=  ` ${e.target.innerText} `;
        inputValue += currentVal;
        history.innerText = inputValue;
        if(e.target.innerText === '='){ //checks if the = operator is pressed, if so send it to operation function to add the calculated answer to inputValue
            stringEval(e.target.innerText, undefined);
            history.innerText = inputValue;
        }
        
        clear();
        updateDisplay();
        }
    })
});

function clear() { //clears input field's value
    input.value = null;
}

function fullClear() { //resets entire calculator
    input.value = null;
    answer = null;
    inputValue = null;
    history.innerText = null;
}

numbt.forEach(button => { //onclick  add the button number value to the input field
    button.addEventListener('click', (e) => {
        if(input.dataset.prevCalcd === 'true') {
            clear();
            input.dataset.prevCalcd = false;
        }
        let str = input.value;
        str += e.target.innerText;
        input.value = str;
    })
})

function stringEval (operator, strNum) { //converts number given from string to a num for the operation function to work with it
   operate(operator, Number(strNum));

}

function updateDisplay(){ //update input display with the current calculated value after each operation press
    input.value = answer;
    input.dataset.prevCalcd = true; //data set value, if true, clear before adding the button value to the input field
}

/* cases to handle:
- if input field is empty, take operator on and use previous / answer value
    - if answer is also null/empty, return 0 or error */

