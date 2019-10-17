const moneyValue = document.querySelector('#money-value');
const moneyCoefficient = document.querySelector('#money-coefficient');
const converter = document.querySelector('#converter');
const result = document.querySelector('#result');
const moneyOut = document.querySelector('#money-out');
const coefOut = document.querySelector('#coef-out');

converter.addEventListener('click', () => {
    if ( parseFloat(moneyValue.value) &&  parseFloat(moneyCoefficient.value) ) {
        let coefficient = moneyCoefficient.value * moneyValue.value;
        result.value = coefficient;
    }
    if ( isNaN(result.value) ) {
        result.value = 'Please, enter correct values';
    }
    if ( !Number(moneyValue.value) ) {
        moneyOut.innerText = 'You must enter correct value to get result';
    } else {
        moneyOut.innerText = '';
    }
    if ( !Number(moneyCoefficient.value) ) {
        coefOut.innerText = 'You must enter correct coefficient to get result';
    } else {
          coefOut.innerText = '';
    }

    if ( moneyValue.value.includes(',') ) {
        moneyValue.value.replace("\\,",".");


    }
    if ( moneyCoefficient.value.includes(',') ) {
        moneyCoefficient.value.replace("\\,",".");
    }
})

