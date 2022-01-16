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
let add = false;
let subtract = false;
let multiply = false;
let divide = false;
let answer = 0;
let hasDecimal = false;
let negative = false;





//////////////////////////////FUNCTIONS///////////////////////////


function updateDisplay() {
    displayText.innerText = currentDisplay;
}


updateDisplay();

function setFirstNumber() {
    firstNumber = Number(currentDisplay);
    calculated = true;
}

function setSecondNumber() {
    secondNumber = Number(currentDisplay);
    calculated = true;
}

function resetOperands() {
    add = false;
    subtract = false;
    multiply = false;
    divide = false;
}


function unselectButtons() {
    btnAdd.classList.remove("selected");
    btnSubtract.classList.remove("selected");
    btnMultipy.classList.remove("selected");
    btnDivide.classList.remove("selected");
}



///////////////////////////////EVENT LISTENERS/////////////////////

//max length of numbers is 12

btnClear.addEventListener("click", () => {
    currentDisplay = "0";
    updateDisplay();
    calculated = false;
    hasDecimal = false;
    unselectButtons();
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
    unselectButtons();
});

btn1.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "1";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "1";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn2.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "2";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "2";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn3.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "3";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "3";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn4.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "4";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "4";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn5.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "5";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "5";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn6.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "6";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "6";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn7.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "7";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "7";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn8.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "8";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "8";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

btn9.addEventListener("click", () => {
    if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
        currentDisplay += "9";
    } else if (displayText.innerText === "0" || calculated) {
        currentDisplay = "9";
        calculated = false;
    } else {
        return
    }
    updateDisplay();
    unselectButtons();
});

///////////UTILITIES AND OPERANDS//////////////

btnPercent.addEventListener("click", () => {
    calculated = true;
    setFirstNumber();
    firstNumber = firstNumber / 100;
    currentDisplay = firstNumber;
    updateDisplay();
    unselectButtons();
});

btnAdd.addEventListener("click", () => {
    setFirstNumber();
    resetOperands();
    add = true;
    hasDecimal = false;
    unselectButtons();
    btnAdd.classList.add("selected");
});

btnSubtract.addEventListener("click", () => {
    setFirstNumber();
    resetOperands();
    subtract = true;
    hasDecimal = false;
    unselectButtons();
    btnSubtract.classList.add("selected");
});

btnMultipy.addEventListener("click", () => {
    setFirstNumber();
    resetOperands();
    multiply = true;
    hasDecimal = false;
    unselectButtons();
    btnMultipy.classList.add("selected");
});

btnDivide.addEventListener("click", () => {
    setFirstNumber();
    resetOperands();
    divide = true;
    hasDecimal = false;
    unselectButtons();
    btnMultipy.classList.add("selected");
});

btnEquals.addEventListener("click", () => {
    setSecondNumber();
    if (add) {
        answer = firstNumber + secondNumber;
    } else if (subtract) {
        answer = firstNumber - secondNumber;
    } else if (multiply) {
        answer = firstNumber * secondNumber;
    } else if (divide) {
        answer = firstNumber / secondNumber;
    }
    currentDisplay = answer;
    updateDisplay();
    calculated = true;
    resetOperands();
    hasDecimal = false;
    unselectButtons();
});

btnDecimal.addEventListener("click", () => {
    if (!hasDecimal) {
        if (displayText.innerText != "0" && displayText.innerText.length < 12 && !calculated) {
            currentDisplay += ".";
        } else if (displayText.innerText === "0" || calculated) {
            currentDisplay = "0.";
            calculated = false;
        } else {
            return;
        }
        updateDisplay();
        hasDecimal = true;
    } else {
        return;
    }
});

btnNegative.addEventListener("click", () => {
    if (!negative) {

    }
})