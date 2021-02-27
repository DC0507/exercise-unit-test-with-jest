// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.8;
    // returnamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "formDollarToYen"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.006;
    // returnamos el valor
    return valueInPound;
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b;
}

// just a console log for ourselves.
console.log(7,3);

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };