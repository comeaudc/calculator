const btn = document.querySelector('button')

btn.addEventListener('click', function(evt) {
    //creates blank paragraph
    const p = document.createElement('p');

    //Gets input 1 value
    var inp1 = parseInt(document.getElementById('num1').value);

    //Gets input 2 value
    var inp2 = parseInt(document.getElementById('num2').value);

    //Gets value of operator
    var operator = document.querySelector('select').value;

    //Gets answer from callback functions
    let answer = math(inp1, inp2, operator)

    //becomes text content of p
    p.textContent = answer;

    //Appends answer to answer div
    document.querySelector('body').appendChild(p)

})

function addNumbers (num1, num2) {
    return num1 + num2
}

function subNumbers (num1, num2) {
    return num1 - num2
}

function multNumbers (num1, num2) {
    return num1 * num2
}

function divNumbers (num1, num2) {
    return num1 / num2
}

function math (num1, num2, operator) {
    if (operator == '+') {
        return addNumbers(num1, num2)
    }
    else if (operator == '-') {
        return subNumbers(num1, num2)
    }
    else if (operator == '*') {
        return multNumbers(num1, num2)
    }
    else {
        return divNumbers(num1, num2)
    }
}
