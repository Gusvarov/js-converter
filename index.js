const moneyValue = document.querySelector('#money-value');
const moneyCoefficient = document.querySelector('#money-coefficient');
const converter = document.querySelector('#converter');
const result = document.querySelector('#result');

converter.addEventListener('click', () => {
    if ( parseFloat(moneyValue.value) &&  parseFloat(moneyCoefficient.value) ) {
        let coefficient = moneyCoefficient.value * moneyValue.value;
        result.value = coefficient;
    }
})

