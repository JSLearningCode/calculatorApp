const { getCurrentWindow } = require('electron').remote;

var result = 0;
var opStack;

function clickElement(el) {
    let resultLabel = document.getElementById('result-label');

    if (typeof(el) === 'number') {
        if (opStack) {
            switch(opStack) {
                case '+':
                    result += el;
                    opStack = undefined;
                    break;
                case '-':
                    result -= el;
                    opStack = undefined;
                    break;
                case 'x':
                    result *= el;
                    opStack = undefined;
                    break;
                case '/':
                    result /= el;
                    opStack = undefined;
                    break;
            }
        } else {
            result = el;
        }

        resultLabel.innerText = result;
        
    } else {
        if (el == ',') {
            resultLabel.innerText = `${result}.`
        } else if (el == '=') {
            resultLabel.innerText = result;
        } else {
            opStack = el;
            resultLabel.innerText = el;
        }
        
    }
        
}

