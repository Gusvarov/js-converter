const moneyValue = document.querySelector('#money-value');
const moneyCoefficient = document.querySelector('#money-coefficient');
const converter = document.querySelector('#converter');
const result = document.querySelector('#result');
const moneyOut = document.querySelector('#money-out');
const coefOut = document.querySelector('#coef-out');
const reset = document.querySelector('#reset');
const moneyValueStyle = document.querySelector('.money-value');
const moneyCoefficientStyle = document.querySelector('.money-coefficient');

converter.addEventListener('click', function() {
    if ( parseFloat(moneyValue.value) &&  parseFloat(moneyCoefficient.value) ) {
        let coefficient = moneyCoefficient.value * moneyValue.value;
        result.value = coefficient;
    }

    if ( isNaN(result.value) ) {
        result.value = 'Please, enter correct values';
    }

    if ( !Number(moneyValue.value) ) {
        moneyOut.innerText = 'Please, enter correct value to get result';
        moneyValue.classList.add('warning');
    } else  {
        moneyOut.innerText = '';
        moneyValue.classList.add('money-coefficient');
        moneyValue.classList.add('warn');
    }

    if ( moneyValue.value === '' ) {
        moneyOut.innerText = 'The value field is required';
    }

    if ( !Number(moneyCoefficient.value) ) {
        coefOut.innerText = 'Please, enter correct coefficient to get result';
        moneyCoefficient.classList.add('warning');
    } else {
        coefOut.innerText = '';
        moneyCoefficient.classList.add('warn');
    }

    if (moneyCoefficient.value === '' ) {
        coefOut.innerText = 'The coefficient field is required';
    }
})

moneyValue.addEventListener('keypress', function() {
    if ( moneyValue.value.includes(',') ) {
         moneyValue.value = moneyValue.value.replace(',', '.');
    }
})

moneyCoefficient.addEventListener('keypress', function() {
    if ( moneyCoefficient.value.includes(',') ) {
        moneyCoefficient.value = moneyCoefficient.value.replace(',', '.');
    }
})

reset.addEventListener('click', function() {
    moneyValue.classList.add('reset');
    moneyCoefficient.classList.add('reset');
})