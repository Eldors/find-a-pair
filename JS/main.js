let cell = document.getElementsByClassName('cell');
let mahjongField = document.querySelector('.mahjong_field');

function generatedArrayPairs() {
    let k = 0;
    let arrayPairs = [];
    while (k < cell.length / 2) {
        arrayPairs.push(k);
        arrayPairs.push(k);
        k++;
    }
    return arrayPairs;
};

function j() {
    let i = 0;
    let arrayPairs = generatedArrayPairs();
    console.log('arrayPairs: ', arrayPairs);
    while ( i < cell.length ) {
        let cardNumber = allocation();
        let cellNumber = document.createElement('div.card');
        cellNumber.innerText = arrayPairs[i];
        cell[cardNumber].appendChild(cellNumber);
        i++; 
    }
};

function allocation() {
    let generatedNumberCard = getRandomInt(20);
    if (cell[generatedNumberCard].firstChild != null ) return allocation();  
    return generatedNumberCard;
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

