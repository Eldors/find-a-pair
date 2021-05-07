'use strict';

const arrId = [
    '445cc4ad-88f7-436f-b811-4fc9b6c72ec2',
    '03290c44-f78e-431c-bfdc-75adbc952b77',
    '8e261ce5-2c4d-4ca9-96c5-124b7cdff07b',
    'cb6048e4-5024-4059-af78-c86cefd8e6ef',
    'ca0a9b4f-f044-4779-ac12-650f2c612698',
    '1b36a6c9-bc4a-4b7e-88c1-c9c8b1a4ee7b',
    'a949e152-752a-49f8-86ed-61c6c4adf404',
    '111d14ee-e789-4e65-ab40-5afa95d3142e',
    '052cab67-ea29-4243-848d-565d7b6c67d7',
    '416349d6-cf83-45a5-8f44-e949152749d1',
    '8cebd97b-ca67-4a2b-9e8e-693645ffe46b',
    '0bd9e0c1-e6d7-4c58-82f6-1c7eae2a2e57',
    '88ffc554-7938-4733-b31c-1b1a2c5d88dc',
    '4b99c677-4a26-48b9-8fa0-350c15a18578',
    'b527b6b9-18c6-45c4-92cf-23abe8b2165a',
    'df62fd40-e366-4be6-b502-41b5aa0c67ad',
    'dd00ffe9-d082-49a2-95f8-d41d3e46b6c0',
    '8c70694d-997b-499b-92ba-1cfbf703f8fa',
    '9405bf02-19a3-41e9-9ca5-a3e9f0c979aa',
    '227d27ae-34b6-489a-b836-d79df6ce6dce',
    '925b65bd-3af3-4496-be20-dd5af156c2d5'
];

// class Area {

//     constructor() {
//         this.playingField = document.querySelector('.playing-field');
//         this.arrCell = [];
//         this.arrayPairs = [];
//         this.ev1 = ""; // undefined
//         this.ev2 = "";
//         this.playingField.addEventListener('click', (event) => {
//             // отдельная функция
//             if (!event.target.matches('div.playing-field div.back div.blur')) {
//                 return;
//             }
//             this.checkingTheEventNumber(event.target);
//             //this.checkСoincidence(event.target);
//         });
//         this.createArrayPairs();
//         this.createGrid();
//         this.allocationNumbers();
//     }

//     isClickableBlock() {

//     }

//     createGrid() {
//         for (let i = 0; i < 20; i++) {
//             creatCell(this.playingField);
//         }
//     }

//     allocationNumbers() {
//         let i = 0;
//         const valueCell = document.querySelectorAll('p.value-cell');
//         // valueCell.forEach((value, idx) => {
//         //     const generationNumber = this.generationRandomInt(20);

//         //     // ===
//         //     if (valueCell[generationNumber].textContent == '') {
//         //         valueCell[generationNumber].textContent = this.arrayPairs[idx];
//         //     }
//         // });

//         while (i < valueCell.length) {
//             const generationNumber = generationRandomInt(20);

//             // ===
//             if (valueCell[generationNumber].textContent === '') {
//                 valueCell[generationNumber].textContent = this.arrayPairs[i];
//                 i++;
//             }
//         }
//     }

//     toggleFilter(e) {
//         e.classList.toggle('filter');
//     }

//     // checkСoincidence(event) {
//     //     this.ev = event;
//     //     this.setTimer(event);
//     //     this.toggleFilter(event);
//     //     this.checkOpenCard(event);
//     // }

//     // checkOpenCard(e) {
//     //     const openCard = this.getOpenCard(e);
//     //     if (openCard) {
//     //         console.log(openCard);
//     //     }
//     // }

//     // getOpenCard(e) {
//     //     console.log(this.arrCell[0].blur.className == 'blur');
//     //     let openCard = '';
//     //     while (openCard == '') {
//     //         for (let i = 0; i < this.arrCell.length; i++) {
//     //             if (this.arrCell[i].blur.className == 'blur') {
//     //                 openCard = this.arrCell[i];
//     //             }
//     //             i++;
//     //         }
//     //     }
//     //     return openCard;
//     // }

//     checkingTheEventNumber(event) {
//         if (this.ev1 == '') {
//             this.ev1 = event;
//             this.toggleFilter(this.ev1);
//             this.setTimer1(this.ev1);
//         } else if (this.ev2 == '') {
//             this.ev2 = event;
//             this.toggleFilter(this.ev2);
//             this.setTimer2(this.ev2);
//             this.checkMath();
//         } else {
//             this.toggleFilter(this.ev1);
//             this.toggleFilter(this.ev2);
//             this.clearTimer(this.evTimerId1);
//             this.clearTimer(this.evTimerId2);
//             this.ev1 = '';
//             this.ev2 = '';
//         }
//     }

//     checkMath() {
//         if (this.ev1.parentNode.lastElementChild.textContent == this.ev2.parentNode.lastElementChild.textContent) {
//             const blur1 = this.ev1.parentNode.firstElementChild,
//                 blur2 = this.ev2.parentNode.firstElementChild;
//             this.ev1.parentNode.removeChild(blur1);
//             this.ev2.parentNode.removeChild(blur2);
//         } else {
//             this.toggleFilter(this.ev1);
//             this.toggleFilter(this.ev2);
//         }
//         this.clearTimer(this.evTimerId1);
//         this.clearTimer(this.evTimerId2);
//         this.ev1 = '';
//         this.ev2 = '';
//     }

//     setTimer1(ev1) {
//         this.ev1TimerId = setTimeout((ev1) => {
//             this.toggleFilter(ev1);
//             this.ev1 = '';
//         }, 2000, ev1);
//     }

//     setTimer2(ev2) {
//         this.ev2TimerId = setTimeout((ev2) => {
//             this.toggleFilter(ev2);
//             this.ev2 = '';
//         }, 2000, ev2);
//     }

//     clearTimer(evTimerId) {
//         clearTimeout(evTimerId);
//     }

//     createArrayPairs() {
//         let k = 0;
//         while (k < 10) {
//             this.arrayPairs.push(k, k);
//             k++;
//         }
//     }

//     generationRandomInt(maxNumber) {
//         return Math.floor(Math.random() * Math.floor(maxNumber));
//     }
// }

// function creatCell(parent) {
//     const container = document.createElement('div'),
//         back = document.createElement('div'),
//         blur = document.createElement('div'),
//         valueCell = document.createElement('p');

//     container.classList.add('container');
//     back.classList.add('back');
//     blur.classList.add('blur', 'filter');
//     valueCell.classList.add('value-cell', 'unselectable');

//     parent.appendChild(container);
//     container.appendChild(back);
//     back.appendChild(blur);
//     back.appendChild(valueCell);
// }

class GameManager {
    constructor() {
        this.playingFieldSize = 20;

        this.creatingPlayingField();
    }

    creatingPlayingField() {
        this.playingField = new PlayingField(this.playingFieldSize);
    }

}

class PlayingField {
    constructor(size) {
        this.playingField = document.querySelector('div.playing-field');
        this.playingFieldSize = size;
        this.arrayCell = [];

        this.randomlyDistributeNumbers();
        this.creatingCells();
        this.creatingFragment();
        this.appendFragment();
        this.addDataIdCells();
        this.addEventListenerPlayingField();
        console.log(this.arrayCell);
    }

    creatingCells() {
        for (let i = 0; i < this.playingFieldSize; i++) {
            const cell = new Cell(this.arrRandomNumbers[i]);
            this.arrayCell.push(cell);
        }
    }

    creatingFragment() {
        this.fragment = document.createDocumentFragment();
        this.arrayCell.forEach((value) => {
            value.creatingCell(this.fragment);
        });
    }

    appendFragment() {
        this.playingField.appendChild(this.fragment);
    }

    creatingArrPairs() {
        this.arrPairs = [];

        for( let i = 0; i < this.playingFieldSize / 2; i++ ) {
            this.arrPairs.push(i, i);
        }
    }

    creatingArrayUndefined() {
        this.arrRandomNumbers = [];

        for( let i = 0; i < this.playingFieldSize; i++ ) {
            this.arrRandomNumbers.push(undefined);
        }
    }
    
    randomlyDistributeNumbers() {
        let i = 0;
        this.creatingArrPairs();
        this.creatingArrayUndefined();

        while( i < this.arrPairs.length ) {
            const randomPosition = generationRandomInt(this.playingFieldSize);

            if(this.arrRandomNumbers[randomPosition] === undefined) {
                this.arrRandomNumbers[randomPosition] = this.arrPairs[i];
                i++;
            }
        }
    }

    addDataIdCells() {
        this.arrayCell.forEach((value, i) => {
            value.container.dataset.id = arrId[i];
        });
    }

    addEventListenerPlayingField() {
        this.playingField.addEventListener('click', (event) => {

            const cellN = arrId.find( (id) => {
                return id === event.target.dataset.id;
            });
            console.log('cellN', cellN);

            // for( let i = 0; i < this.playingFieldSize; i++) {
            //     if( event.target.dataset.id === arrId[i]) {
            //         this.eventClick = this.arrayCell[i];
            //         this.openCell(this.arrayCell[i]);
            //         return;
            //     }
            // }
        });
    }

    openCell(cell) {
        cell.switchVisibility();
        this.addTimerEvent(cell);
        
    }

    addTimerEvent(cell) {
        const timer = new Timer(cell);
        timer.setTimerCell();
        setTimeout(() => {
            console.log(timer);
        }, 2000);
        
    }
}

class Cell {
    constructor(value) {
        this.visibility = false;
        this.disabled = false;
        this.value = value;
    }

    disableCell() {
        this.container.dataset.disabled = true;
    }

    visibilityCell() {
        this.container.dataset.visibility = true;
    }

    switchVisibility() {
        this.shirt.classList.toggle('visible');
    }

    creatingCell(fragment) {
        const container = document.createElement('div');
        const shirt = document.createElement('img');
        const valueCell = document.createElement('img');

        container.classList.add('container');
        shirt.classList.add('shirt');
        valueCell.classList.add('value-cell');

        shirt.setAttribute('src', '/pictures/shirt.svg');
        valueCell.setAttribute('src', `/pictures/numbers${this.value}.png`);

        container.dataset.disabled = this.disabled;
        container.dataset.visibility = this.visibility;

        container.appendChild(shirt);
        container.appendChild(valueCell);

        fragment.appendChild(container);
        this.container = container;
        this.shirt = shirt; 
        this.valueCell = valueCell;
        return fragment;
    }
}

class Timer {
    constructor(cell) {
        this.id = cell.container.dataset.id;
    }

    setTimerCell() {
        this.timer = setTimeout(() => {
            return false;
        }, 2000);
    }


}

const gameManager = new GameManager();

function generationRandomInt(maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber));
}
