const container = document.getElementById('wrapper');
const display = document.getElementById('input');
const clear = document.getElementById('clear');
let firstValue = '';
let secondValue = '';
let isFirstValue = true;
const symbols = ['+', '-', '×', '÷'];
let currentSymbol = '';


container.addEventListener('click', handleClick);


function handleClick(event) {
    const currentValue = event.target.innerText;
    const btn = event.target.classList[0];

    if(!symbols.includes(currentValue) && currentValue !== '=' && btn ) {
        isFirstValue ? saveFirstValue(currentValue) : saveSecondValue(currentValue) 
    } 

    if(symbols.includes(currentValue) && secondValue) {
        equal(currentSymbol);
    }

    if(symbols.includes(currentValue)) {
        isFirstValue = false; //флаг, который определ введенное хгачение 

        currentSymbol = currentValue;
    }

    if(currentValue === '=') {
        equal(currentSymbol);
    }

};

clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    firstValue= '';
    secondValue = '';

    showDisplayValue('');

    isFirstValue = true;
}


function showDisplayValue(value) {
    display.innerText = value;
};

function saveFirstValue(value) {
     firstValue += value;
     
     showDisplayValue(firstValue);
}

function saveSecondValue(value) {
     secondValue += value;

     showDisplayValue(secondValue);
}

function sumValue() {
    const firstValueNumber = Number(firstValue);
    const secondValueNumber = Number(secondValue);
    const result = firstValueNumber + secondValueNumber;

    showDisplayValue(result);

    firstValue = result;
    secondValue = '';
};

function subtractionValue() {
    const result = firstValue - secondValue;
    
    showDisplayValue(result);
    firstValue = result;
    secondValue = '';
};

function multiplicationValue() {
    const result = firstValue * secondValue;

    showDisplayValue(result);
    firstValue = result;
    secondValue = '';
}

function divisionValue() {
    const result = firstValue / secondValue;

    showDisplayValue(result);
    firstValue = result;
    secondValue = '';
}

function equal(symbol) {
    switch (symbol) {
        case '+':
            sumValue();
            break;
        case '-':
            subtractionValue();
            break;
        case '×':
            multiplicationValue();
            break;
        case '÷':
            divisionValue();
            break;
    }
}




 