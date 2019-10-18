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
        if ( moneyValue.classList.contains('warning') === true ) {
            moneyValue.classList.remove('warn');
        } else if ( moneyValue.classList.contains('warning') === false ) {
            moneyValue.classList.add('warning');
        }
        if ( moneyValue.classList.contains('warn') === true ) {
            moneyValue.classList.toggle('warn');
        }
    } else  {
        moneyOut.innerText = '';
        moneyValue.classList.add('warn');
    }

    if ( moneyValue.value === '' ) {
        moneyOut.innerText = 'The value field is required';
    }

    if ( !Number(moneyCoefficient.value) ) {
        coefOut.innerText = 'Please, enter correct coefficient to get result';
        if ( moneyCoefficient.classList.contains('warning') === true ) {
             moneyCoefficient.classList.remove('warn');
        } else if ( moneyCoefficient.classList.contains('warning') === false ) {
             moneyCoefficient.classList.add('warning');
        }
        if ( moneyCoefficient.classList.contains('warn') === true ) {
             moneyCoefficient.classList.toggle('warn');
        }
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
     if ( moneyValue.classList.contains('warning') === true ) {
        moneyValue.classList.remove('warning');
     } else if ( moneyValue.classList.contains('warning') === false ) {
        moneyValue.classList.add('reset');
     }
     if ( moneyValue.classList.contains('warn') === true ) {
        moneyValue.classList.remove('warn');
     } else if ( moneyValue.classList.contains('warn') === false ) {
        moneyValue.classList.add('reset');
     }

    if ( moneyCoefficient.classList.contains('warning') === true ) {
        moneyCoefficient.classList.remove('warning');
    } else if ( moneyCoefficient.classList.contains('warning') === false ) {
        moneyCoefficient.classList.add('reset');
    }
    if ( moneyCoefficient.classList.contains('warn') === true ) {
        moneyCoefficient.classList.remove('warn');
    } else if ( moneyCoefficient.classList.contains('warn') === false ) {
        moneyCoefficient.classList.add('reset');
    }
})