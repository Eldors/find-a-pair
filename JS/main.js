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
        let cardNumber = allocationNumbersCard();
        flipContainer[cardNumber].firstElementChild.lastElementChild.innerText = arrayPairs[i];
        i++; 
    }
};

function allocationNumbersCard() {
    let generatedNumberCard = getRandomInt(20);
    if(flipContainer[generatedNumberCard].firstElementChild.lastElementChild.textContent != '') return allocationNumbersCard();
    return generatedNumberCard;
}

j();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function flipCard(event) {
    if(!event.target.matches('section.test div.flip-container')) return;
    
    //let openCard = document.querySelector('.flip');
    //if(openCard != null) console.log(openCard.firstElementChild.lastElementChild.textContent);

    comparisonOfNumberCard(event.target)
    //event.target.classList.add('flip');


    //setTimeout(function (){ event.target.classList.remove('flip')}, 1000);
}

function comparisonOfNumberCard(card) {
    let openCard = document.querySelector('.flip-container.flip');
    if(openCard != null) {
        card.classList.add('flip');
        console.log(card);
        if(openCard.firstElementChild.lastElementChild.textContent == card.firstElementChild.lastElementChild.textContent) {
            let a = document.createElement('div');
            let b = document.createElement('div');
            a.classList.add('open');
            b.classList.add('open');
            a.textContent = openCard.firstElementChild.lastElementChild.textContent;
            b.textContent = card.firstElementChild.lastElementChild.textContent;
            setTimeout(function() {
                if(openCard.childElementCount < 2)    openCard.appendChild(a);
                openCard.firstElementChild.remove();
            }, 500);
            setTimeout(function() {
                if(card.childElementCount < 2)      card.appendChild(b);
                card.firstElementChild.remove();
            }, 500);
            card.classList.remove('flip');
        }
        else {
            card.classList.add('flip');
            setTimeout(function (){
                card.classList.remove('flip');
                openCard.classList.remove('flip');    
            }, 500);
        }
    }
    else {
        card.classList.add('flip');
        setTimeout(function (){ card.classList.remove('flip')}, 1000);
    }
};

test.addEventListener('click', flipCard);

let shirtCard = document.querySelector('img');

