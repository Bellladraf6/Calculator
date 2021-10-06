class Calculator {

    constructor() {
        this.container = document.getElementById('wrapper');
        this.display = document.getElementById('input');
        this.clear = document.getElementById('clear');
        this.firstValue = '';
        this.secondValue = '';
        this.currentSymbol = '';
        this.isFirstValue = true;
        this.container.addEventListener('click', this.handleClick);
        this.clear.addEventListener('click', this.clearDisplay);
    }


    handleClick = (event) => {
        const currentValue = event.target.innerText;
        const btn = event.target.classList[0];
        const symbols = ['+', '-', '×', '÷'];
        // let currentSymbol = '';

        if (!symbols.includes(currentValue) && currentValue !== '=' && btn) {
            this.isFirstValue ? this.saveFirstValue(currentValue) : this.saveSecondValue(currentValue)
        }

        if (symbols.includes(currentValue) && this.secondValue) {
            this.equal(this.currentSymbol);
        }

        if (symbols.includes(currentValue)) {
            this.isFirstValue = false; //флаг, который определ введенное хгачение 

            this.currentSymbol = currentValue;
        }

        if (currentValue === '=') {
            this.equal(this.currentSymbol);
        }

    }

    clearDisplay = () => {
        this.firstValue = '';
        this.secondValue = '';

        this.showDisplayValue('');

        this.isFirstValue = true;
    }


    showDisplayValue = (value) => {
        this.display.innerText = value;
    };

    saveFirstValue = (value) => {
        this.firstValue += value;

        this.showDisplayValue(this.firstValue);
    }

    saveSecondValue = (value) => {
        this.secondValue += value;

        this.showDisplayValue(this.secondValue);
    }

    sumValue = () => {
        const firstValueNumber = Number(this.firstValue);
        const secondValueNumber = Number(this.secondValue);
        const result = firstValueNumber + secondValueNumber;

        this.showDisplayValue(result);

        this.firstValue = result;
        this.secondValue = '';
    };

    subtractionValue = () => {
        const result = this.firstValue - this.secondValue;

        this.showDisplayValue(result);
        this.firstValue = result;
        this.secondValue = '';
    };

    multiplicationValue = () => {
        const result = this.firstValue * this.secondValue;
        console.log(result);
        this.showDisplayValue(result);
        this.firstValue = result;
        this.secondValue = '';
    }

    divisionValue = () => {
        const result = this.firstValue / this.secondValue;

        this.showDisplayValue(result);
        this.firstValue = result;
        this.secondValue = '';
    }

    equal = (symbol) => {
        switch (symbol) {
            case '+':
                this.sumValue();
                break;
            case '-':
                this.subtractionValue();
                break;
            case '×':
                this.multiplicationValue();
                console.log("multiplicationValue");
                break;
            case '÷':
                this.divisionValue();
                break;
        }
    }
}

new Calculator();