let result = 0;

let resultLabel = document.getElementById('result-label');

function clickElement(el) {
    if (typeof(el) === 'number') {
        resultLabel.innerText = el;
    } 
}

