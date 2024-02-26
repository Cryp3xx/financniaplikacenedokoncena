const Euro = 0.04;
const Dollar = 0.042;
const Pound = 0.034;

function convertToEuro() {
    const moneyInput = parseFloat(document.getElementById("moneyinput").value);
    const result = moneyInput * Euro;

    document.getElementById("result").textContent = result.toFixed(2) + " €"; 
}

function convertToDollar() {
    const moneyInput = parseFloat(document.getElementById("moneyinput").value);
    const result = moneyInput * Dollar;

    document.getElementById("result").textContent = result.toFixed(2) + " $";
}
function convertToPound() {
    const moneyInput = parseFloat(document.getElementById("moneyinput").value);
    const result = moneyInput * Pound;

    document.getElementById("result").textContent = result.toFixed(2) + " £"; 
}