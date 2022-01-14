const btn0 = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnClear = document.querySelector(".btn-clear");
const btnNegative = document.querySelector(".btn-neg");
const btnPercent = document.querySelector(".btn-percent");
const btnDivide = document.querySelector(".btn-divide");
const btnMultipy = document.querySelector(".btn-multiply");
const btnSubtract = document.querySelector(".btn-subtract");
const btnAdd = document.querySelector(".btn-add");
const btnEquals = document.querySelector(".btn-equals");
const btnDecimal = document.querySelector(".btn-decimal");
const buttonsNumber = document.querySelectorAll(".btn-number");
const displayText = document.querySelector(".display-text").innerText;
let currentDisplay = "0";
let firstNumber;
let secondNumber;





//////////////////////////////FUNCTIONS///////////////////////////


function updateDisplay() {
    displayText = currentDisplay;
}








///////////////////////////////EVENT LISTENERS/////////////////////

btn1.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "1";
    } else {
        currentDisplay = "1";
    }
    updateDisplay();
})