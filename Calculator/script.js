const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;

        if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
            if (currentInput !== "") {
                operator = buttonText;
                currentInput += " " + buttonText + " ";
                display.value = currentInput;
            }
        } else if (buttonText === "=") {
            if (currentInput !== "") {
                try {
                    currentInput = eval(currentInput).toString();
                    display.value = currentInput;
                } catch (error) {
                    display.value = "Error";
                }
            }
        } else if (buttonText === "C") {
            currentInput = "";
            operator = "";
            display.value = "";
        } else {
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});
