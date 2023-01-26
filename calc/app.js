let number1 = null, number2 = null;
let sum = "null";
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
        strOperator = el.innerHTML;
        calculate();
        //document.querySelector(".displayunit").innerText += strOperator;
        document.querySelector(".displayunit").innerText = document.querySelector(".displayunit").innerText + strOperator;
        number2 = sum;
        number1 = null;
    })
})

document.querySelector(".equalSign").addEventListener("click", function(){
    number1 = Number(strnumber);
    calculate();
    document.querySelector(".displayunit").innerText = sum;
    strnumber="";
    sum=null;
    number1=null;
    number2=null;
    strOperator="";
})

document.querySelector(".ac").addEventListener("click", function(){
    strnumber="";
    sum=null;
    number1=null;
    number2=null;
    strOperator="";
    document.querySelector(".displayunit").innerText = "0";
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





