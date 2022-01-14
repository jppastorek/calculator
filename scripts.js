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
const displayText = document.querySelector(".display-text");
let currentDisplay = "0";
let firstNumber;
let secondNumber;





//////////////////////////////FUNCTIONS///////////////////////////


function updateDisplay() {
    displayText.innerText = currentDisplay;
}


updateDisplay();





///////////////////////////////EVENT LISTENERS/////////////////////

//max length of numbers is 12

btnClear.addEventListener("click", () => {
    currentDisplay = "0";
    updateDisplay();
});

//REFACTOR THIS WITH A FOR LOOP

btn0.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "0";
    } else {
        currentDisplay = "0";
    }
    updateDisplay();
});

btn1.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "1";
    } else {
        currentDisplay = "1";
    }
    updateDisplay();
});

btn2.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "2";
    } else {
        currentDisplay = "2";
    }
    updateDisplay();
});

btn3.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "3";
    } else {
        currentDisplay = "3";
    }
    updateDisplay();
});

btn4.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "4";
    } else {
        currentDisplay = "4";
    }
    updateDisplay();
});

btn5.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "5";
    } else {
        currentDisplay = "5";
    }
    updateDisplay();
});

btn6.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "6";
    } else {
        currentDisplay = "6";
    }
    updateDisplay();
});

btn7.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "7";
    } else {
        currentDisplay = "7";
    }
    updateDisplay();
});

btn8.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "8";
    } else {
        currentDisplay = "8";
    }
    updateDisplay();
});

btn9.addEventListener("click", () => {
    if (displayText.innerText != "0") {
        currentDisplay += "9";
    } else {
        currentDisplay = "9";
    }
    updateDisplay();
});