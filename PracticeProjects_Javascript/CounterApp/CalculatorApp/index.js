let sumEl = document.getElementById("sum-el");

function getInputValues(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2};
}

function add(){
    let {num1, num2} = getInputValues();
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract(){
    let {num1, num2} = getInputValues();
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function divide(){
    let {num1, num2} = getInputValues();
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply(){
    let {num1, num2} = getInputValues();
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}

