let number1 = null, number2 = null;
let sum;
let strnumber = "";
let strOperator = "";

let numbers = document.querySelectorAll(".numbers");
numbers.forEach(el =>{
    el.addEventListener("click", function(){
        strnumber +=  el.innerHTML;
        document.querySelector(".displayunit").innerText = strnumber;
    }) 
})

let operators = document.querySelectorAll(".operators");
operators.forEach(el => {
    el.addEventListener("click", function(){
        number1 = Number(strnumber);
        strOperator = el.innerHTML;
        if(number1 != null && number2 != null && strOperator == ""){
            calculate();
        }
        number2 = number1;
        number1 = null;
        strnumber = "";
    })
})

function calculate(){
    switch(strOperator){
        case "+":
            sum = number2 + number1;
            break;

        case "-":
            sum = number2 - number1;
            break;

        case "*":
            sum = number2 * number1;
            break;

        case "/":
            sum = number2 / number1;
            break;
    }
}

document.querySelector(".equalSign").addEventListener("click", function(){
    number1 = Number(strnumber);
    calculate();
    document.querySelector(".displayunit").innerText = sum;
})



