'use strict'

let test = document.querySelector('.test');
let flipContainer = document.querySelectorAll('.test .flip-container');

function generatedArrayPairs() {
    let k = 0;
    let arrayPairs = [];
    while (k < flipContainer.length / 2) {
        arrayPairs.push(k);
        arrayPairs.push(k);
        k++;
    }
    return arrayPairs;
};

function j() {
    let i = 0;
    let arrayPairs = generatedArrayPairs();
    while ( i < flipContainer.length ) {
        let cardNumber = allocation();
        flipContainer[cardNumber].firstElementChild.lastElementChild.innerText = arrayPairs[i];
        i++; 
    }
};

function allocation() {
    let generatedNumberCard = getRandomInt(20);
    if(flipContainer[generatedNumberCard].firstElementChild.lastElementChild.textContent != '') return allocation();
    return generatedNumberCard;
}

j();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function flipCard(event) {
    if(!event.target.matches('section.test div.flip-container')) return;
    event.target.classList.toggle('flip');
    setTimeout(function (){ event.target.classList.toggle('flip')}, 2000, event.target);
}

test.addEventListener('click', flipCard);

let shirtCard = document.querySelector('img');

