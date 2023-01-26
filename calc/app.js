let number1 = null, number2 = null;
let strnumber = "";
let strOperator = "";

let numbers = document.querySelectorAll(".numbers");
numbers.forEach(el =>{
    el.addEventListener("click", function(){
        if(el.innerText == "."){
            let nokta = strnumber.split(".");
            if(nokta.length > 1) return;
        }
        strnumber +=  el.innerHTML;
        document.querySelector(".displayunit").innerText = strnumber;
    }) 
})

let operators = document.querySelectorAll(".operators");
operators.forEach(el => {
    el.addEventListener("click", function(){
        number1 = Number(strnumber);
        strnumber="";
        if(number1 != null && number2 != null && strOperator !== ""){
            calculate();
            strOperator = el.innerText;
            document.querySelector(".displayunit").innerText = number2 + strOperator;
        }
        else{
            strOperator = el.innerText;
            document.querySelector(".displayunit").innerText = document.querySelector(".displayunit").innerText + strOperator;
            number2 = number1;
        }  
        number1 = null;
    })
})

document.querySelector(".equalSign").addEventListener("click", function(){
    number1 = Number(strnumber);
    if(number1 != null && number2 != null && strOperator !== "") calculate();
    document.querySelector(".displayunit").innerText = number2;
    strnumber="";
    number1=null;
    number2=null;
    strOperator="";
})

document.querySelector(".ac").addEventListener("click", function(){
    strnumber="";
    number1 = null;
    number2 = null;
    strOperator = "";
    document.querySelector(".displayunit").innerText = "0";
})


function calculate(){
    switch(strOperator){
        case "+":
            number2 = number2 + number1;
            break;

        case "-":
            number2 = number2 - number1;
            break;

        case "*":
            number2 = number2 * number1;
            break;

        case "/":
            number2 = number2 / number1;
            break;
    }
}





