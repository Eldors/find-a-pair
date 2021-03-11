let cell = document.getElementsByClassName('cell');
console.log('cell: ', cell.length);
let mahjongField = document.querySelector('.mahjong_field');

let sumCell = cell.length;
let amountPair = sumCell / 2;
let arrayPairs = [];

function generatedArrayPairs(arrayPairs) {
    let k = 0;
    while (k < cell.length / 2) {
        arrayPairs.push(k);
        arrayPairs.push(k);
        k++;
    }
};

generatedArrayPairs(arrayPairs);

function j() {
    let i = 0;
    while ( i <= cell.length ) {
        let cardNumber = allocation();
        let cellNumber = document.createElement('div.card');
        cellNumber.innerText = arrayPairs[i];
        cell[cardNumber].appendChild(cellNumber);
        i++;
    }
};

function allocation() {
    let generatedNumberCard = getRandomInt(19);
    if (cell[generatedNumberCard].firstChild != null ){
        return allocation();
    }
    else {
        return generatedNumberCard;
    }
}

j();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function openCard(event) {
    if (!event.target.matches('section.mahjong_field div.cell')) return
    let clickCell = event.target;
    clickCell.classList.toggle('open_Card');
   
};

mahjongField.addEventListener('click', openCard);

let shirtCard = document.querySelector('img');

