"use strict";

let result = document.getElementById('result');

const display = function (arg) {
    console.log(typeof arg)
    let a = Number(result.value += arg)
    console.log(typeof a)
    console.log(typeof result.value)
}

function clearScreen() {
    result.value = '';
}

function calculate() {
    if (!result.value) {
        alert('Type some calculations')
        return
    }
    result.value = eval(result.value);
    result.value.sum()
}