let inputValue = null; //stores all of the inputs as a string
let answer = null; //stores the value of the operations. Update as more inputs are being entered
let prevNum = null;

const history = document.querySelector('.history');
const clearBt = document.querySelector('.is-clear');
const delBt = document.querySelector('.is-del');
const input = document.querySelector('.input');
const numbt = document.querySelectorAll('.num');
const bt = document.querySelectorAll('.operator');
const decmialBt = document.querySelector('.is-decimal');

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
            answer = checkDecimal(result);
            break;
        case '−':
            result = subtract(n2);
            answer = checkDecimal(result);
            break;
        case 'x':
            result = multiply(n2);
            answer = checkDecimal(result);
            break;
        case '/':
            result = divide(n2);
            answer = checkDecimal(result);
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
    let updatedNum = input.innerText;
    updatedNum = updatedNum.substring(0,updatedNum.length -1);
    input.innerText = updatedNum;
})


bt.forEach(bt => {
    bt.addEventListener('click', (e) => {
        if(inputValue !== null){ //if a inputValue is not null, previous inputs have been inserted into the calculator
            if (inputValue.split(' ').length >= 3) { //checks if a number and operator are in the history variable
            //send it to a function to calculate current value + previous digit
            let splitStr = inputValue.split(' '); 
            stringEval(splitStr[splitStr.length - 2], input.innerText);
        }}

        if(inputValue !== null){
            if(inputValue.includes('=')){
                inputValue = null;
        }}

        if(inputValue === null){ //first pass, assign inputValue to current value in the display
            if(input.innerText === ''){
                history.innerText = '0 =';
                input.innerText = 0;
                return;
            }
            let currentVal = input.innerText;
            prevNum = Number(input.innerText);
            currentVal +=  ` ${e.target.innerText} `;
            inputValue = currentVal;
            answer = Number(input.innerText);
            history.innerText = inputValue;
            clear();
        }
        else { //second and onwards pass, add input value along with the new input
        let currentVal = input.innerText;
        currentVal +=  ` ${e.target.innerText} `;
        inputValue += currentVal;
        history.innerText = inputValue;
        if(e.target.innerText === '='){ //checks if the = operator is pressed, if so send it to operation function to add the calculated answer to inputValue
            stringEval(e.target.innerText, undefined);
            history.innerText = inputValue;
            input.dataset.finishedCalc = true;
        }
        
        clear();
        updateDisplay();
        }
    })
});

function clear() { //clears input field's value
    input.innerText = null;
}

function fullClear() { //resets entire calculator
    input.innerText = null;
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
        let str = input.innerText;
        str += e.target.innerText;
        input.innerText = str;
    })
})

function stringEval (operator, strNum) { //converts number given from string to a num for the operation function to work with it
   operate(operator, Number(strNum));

}

function updateDisplay(){ //update input display with the current calculated value after each operation press
/*     if(input.dataset.finishedCalc === 'true'){
        answer = input.innerText;
        input.innerText = answer;
        input.dataset.finishedCalc = false;
    } */

    input.innerText = answer;
    
    input.dataset.prevCalcd = true; //data set value, if true, clear before adding the button value to the input field
}

decmialBt.addEventListener('click', (e) => {
    if(input.dataset.prevCalcd === 'true') {
        clear();
        input.dataset.prevCalcd = false;
    }
    if(input.innerText.includes('.')){
        return;
    }
    let str = input.innerText;
    str += e.target.innerText;
    input.innerText = str;
})

function checkDecimal(num) {
    if(num.toString().includes('.')){
        const numStr = String(num);
        const decimalCount = numStr.split('.')[1].length;
 
        if(decimalCount > 4){
            num = num.toFixed(3);
        }
    }
    return num;
}

/* cases to handle:
- if input field is empty, take operator on and use previous / answer value
    - if answer is also null/empty, return 0 or error */

