let currentExpression = "";
let ready = false;
let prev = '';

    document.addEventListener('DOMContentLoaded', (e) => {
        const display = document.querySelector('input');
        display.addEventListener("keyup", event => {
            const validCharacters = /^[0-9+\-*/]*$/; // Regular expression for valid characters

            if (!validCharacters.test(event.key)) {
                event.preventDefault();
            } else{
                appendToDisplayfromKey(event.key);
            }
        });
    });

    function appendToDisplayfromKey(value) {
        const display = document.getElementById("display");
        console.log(display.value);
        console.log(prev);
        if (value == '+' || value == '-' || value == '*' || value == '/') {
            if(prev == '+' || prev == '-' || prev == '*' || prev == '/'){
                currentExpression = display.value;
                console.log("Ex:" + currentExpression);
                currentExpression = currentExpression.substring(0, currentExpression.length - 1);
                currentExpression = currentExpression.substring(0, currentExpression.length - 1);
                currentExpression += value;
                console.log("Ex:" + currentExpression);
                display.value = currentExpression;
            } else if (ready == true) {
                midcalculate();
            } else {
                ready = true;
            }
        }
        currentExpression = display.value;
        prev = value;
    }

    function appendToDisplay(value) {
        const display = document.getElementById("display");
        if (value == '+' || value == '-' || value == '*' || value == '/') {
            if(prev == '+' || prev == '-' || prev == '*' || prev == '/'){
                currentExpression = currentExpression.substring(0, currentExpression.length - 1);
            } else if (ready == true) {
                midcalculate();
            } else {
                ready = true;
            }
        }
        currentExpression += value;
        display.value = currentExpression;
        prev = value;
    }

    function clearDisplay() {
        const display = document.getElementById("display");
        display.value = "";
        currentExpression = "";
        ready = false;;
    }

    function calculate() {
        const display = document.getElementById("display");
        const result = eval(currentExpression);
        const historyList = document.getElementById("history-list");
        const listItem = document.createElement("li");
        if(result != undefined){
            listItem.textContent = `${result}`;
            historyList.appendChild(listItem);
            clearDisplay();
        } else {
            document.getElementById("display").value = "Error";
        }
    }

    function midcalculate() {
        const display = document.getElementById("display");
        const result = eval(currentExpression);
        const historyList = document.getElementById("history-list");
        const listItem = document.createElement("li");
        listItem.textContent = `${result}`;
        historyList.appendChild(listItem);
    }

    function makeNegative() {
        currentExpression += '-';
        display.value = currentExpression;
        prev = value;
    }

    function clearHistory() {
        const historyList = document.getElementById("history-list");
        historyList.innerHTML = ""; // Clear the content of the history list
    }