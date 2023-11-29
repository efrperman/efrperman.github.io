let clickedButton = null;

function genRandomNum(min, max) {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayRandomNum() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = clickedButton
        ? `Resultado: <strong>${randomNum}</strong>`
        : `Elige un dado :)`;
}

function highlightButton(button) {
    clearHighlight();
    button.classList.add('highlight-btn');
    clickedButton = button;
}

function clearHighlight() {
    if (clickedButton) {
        clickedButton.classList.remove('highlight-btn');
    }
}

function addEventListenerToDie(dieType, sides) {
    document.getElementById(dieType).addEventListener('click', function () {
        genRandomNum(1, sides);
        highlightButton(this);
    });
}

// Añadir eventos a los dados
addEventListenerToDie('d4', 4);
addEventListenerToDie('d6', 6);
addEventListenerToDie('d8', 8);
addEventListenerToDie('d10', 10);
addEventListenerToDie('d12', 12);
addEventListenerToDie('d20', 20);
addEventListenerToDie('d100', 100);

// Añadir evento para mostrar el total
document.getElementById('total').addEventListener('click', function () {
    if (clickedButton) {
        genRandomNum(1, parseInt(clickedButton.id.substring(1)));
        displayRandomNum();
    } else {
        displayRandomNum();
    }
});