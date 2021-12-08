let inputValue = null; //stores all of the inputs as a string
let answer = null; //stores the value of the operations. Update as more inputs are being entered

const clearBt = document.querySelector('.is-clear');
const delBt = document.querySelector('.is-del');
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

clearBt.addEventListener('click', (e) => {
    clear();
})

delBt.addEventListener('click', (e) => {
    let updatedNum = input.value;
    updatedNum = updatedNum.substring(0,updatedNum.length -1);
    input.value = updatedNum;
})


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
        clear();
        updateDisplay();
        }

        /* if() run the check before adding onto the string */

    })
});

function clear() {
    input.value = null;
}

numbt.forEach(button => {
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

function stringEval (operator, strNum) {
   operate(operator, Number(strNum));
}

function updateDisplay(){
    input.value = answer;
    input.dataset.prevCalcd = true;
}

/* cases to handle:
- if input field is empty, take operator on and use previous / answer value
    - if answer is also null/empty, return 0 or error */

/* functionality to do still:
- add additional div to the display to show the total sequence of operations
- update input field with answer? -DONE
    ie: 5 + 5 + should show 10 and as the user enters the new value it should clear and show the number entered
    IE2: 5+ 5 + > 10 + > click 1 and 10 should disappear and 1 should display. On click of equals or operator 
        it should display the new current answer value
        
        
        
- clear button needs to actually clear
- delete button needs to remove the last entered digit
- equals opeartor needs to work*/
