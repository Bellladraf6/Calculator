const container = document.getElementById('wrapper');
const display = document.getElementById('input');
let firstValue = '';
let secondValue = '';
let isFirstValue = true;
const symbols = ['+', '-', '×', '÷'];
let currentSymbol = '';

container.addEventListener('click', handleClick);

function handleClick(event) {
    const currentValue = event.target.innerText;

    if(!symbols.includes(currentValue) && currentValue !== '=') {
        isFirstValue ? saveFirstValue(currentValue) : saveSecondValue(currentValue) 
    } 

    if(symbols.includes(currentValue)) {
        isFirstValue = false;

        currentSymbol = currentValue;
    }

    if(currentValue === '=') {
        equal(currentSymbol);
    }
};

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
}

function equal(symbol) {
    switch (symbol) {
        case '+':
            sumValue();
            break
    }
}



 