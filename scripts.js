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
let firstNumber = 0;
let secondNumber = 0;
let currentDisplay = "0";
let calculated = false;






//////////////////////////////FUNCTIONS///////////////////////////


function updateDisplay() {
    displayText.innerText = currentDisplay;
}


updateDisplay();

function setFirstNumber() {
    firstNumber = Number(currentDisplay);
}





///////////////////////////////EVENT LISTENERS/////////////////////

//max length of numbers is 12

btnClear.addEventListener("click", () => {
    currentDisplay = "0";
    updateDisplay();
    calculated = false;
});

//REFACTOR THIS WITH A FOR LOOP

/////////////////NUMBERS///////////////////////

btn0.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "0";
    } else {
        currentDisplay = "0";
    }
    updateDisplay();
});

btn1.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "1";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "1";
    } else {
        return
    }
    updateDisplay();
});

btn2.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "2";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "2";
    } else {
        return
    }
    updateDisplay();
});

btn3.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "3";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "3";
    } else {
        return
    }
    updateDisplay();
});

btn4.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "4";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "4";
    } else {
        return
    }
    updateDisplay();
});

btn5.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "5";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "5";
    } else {
        return
    }
    updateDisplay();
});

btn6.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "6";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "6";
    } else {
        return
    }
    updateDisplay();
});

btn7.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "7";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "7";
    } else {
        return
    }
    updateDisplay();
});

btn8.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "8";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "8";
    } else {
        return
    }
    updateDisplay();
});

btn9.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "9";
    } else if (displayText.innerText === "0" && !calculated) {
        currentDisplay = "9";
    } else {
        return
    }
    updateDisplay();
});

///////////UTILITIES AND OPERANDS//////////////

btnPercent.addEventListener("click", () => {
    calculated = true;
    setFirstNumber();
    firstNumber = firstNumber / 100;
    currentDisplay = firstNumber;
    updateDisplay();
});

btnAdd.addEventListener("click", () => {
    setFirstNumber();

})