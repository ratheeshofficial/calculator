"use strict";

let result = document.getElementById('result');
let count = 0

const display = function(arg){
    console.log(typeof arg)
    let a = Number(result.value += arg)
    console.log(typeof a) 
}

function clearScreen(){
    result.value = '';
}

function divide(arg){
    console.log(result.value += arg )
}

function calculate(){
//    let num1 = result.value
//     console.log(num1)
    result.value.sum()  
}