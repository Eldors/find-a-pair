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
        if(openCard.firstElementChild.lastElementChild.textContent == card.firstElementChild.lastElementChild.textContent) {
            /*openCard.classList.add('open');
            card.classList.add('open');            */
            let a = document.createElement('div');
            a.textContent = openCard.firstElementChild.lastElementChild.textContent;
            //console.log('a.textContent: ', a.textContent);
            //a.classList.add('open');
            openCard.classList.add('open');
            card.classList.add('open');
            //openCard.insertBefore(a, openCard.firstElementChild);
            //openCard.classList.add('open');
            //openCard.classList.remove('flip');
            //card.insertBefore(a, card.firstElementChild); 

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
        setTimeout(function (){ card.classList.remove('flip')}, 2000);
    }
};

test.addEventListener('click', flipCard);

let shirtCard = document.querySelector('img');

