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
        this.timerOfTheFirstEvent = undefined;

        this.randomlyDistributeNumbers();
        this.creatingCells();
        this.creatingFragment();
        this.appendFragment();
        this.addDataIdCells();
        this.addEventListenerPlayingField();
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
            const eventCellIndex = arrId.findIndex( (index, ) => {
                if (index === event.target.dataset.id) {
                    return index;
                }
            });
            this.timerLogic(this.arrayCell[eventCellIndex]);
        });
    }

    timerLogic(eventCell) {
        if(this.checkActivityCell(eventCell)) {
            return;
        }

        if(this.checkTimerStatus()) {
            this.firstOpenCell = eventCell;
            this.openCell(this.firstOpenCell);
            this.startTheTimerOfTheFirstEvent();
        }
        else if(this.checkTimerStatus() === false) {
            this.secondOpenCell = eventCell;
            this.openCell(this.secondOpenCell);
            this.clearTheTimerOfTheFirstEvent();
            if( this.checkMatchOpenCell()) {
                this.firstOpenCell.disableCell();
                this.secondOpenCell.disableCell();
                this.firstOpenCell = undefined;
                this.secondOpenCell = undefined;
            } else {
                this.startErrorTimer(this.firstOpenCell, this.secondOpenCell);
                this.firstOpenCell = undefined;
                this.secondOpenCell = undefined;
            }  
        }
    }

    checkActivityCell(eventCell) {
        return eventCell.disabled;
    }

    openCell(cell) {
        cell.switchVisibility();
    }

    checkTimerStatus() {
        return this.timerOfTheFirstEvent === undefined;
    }

    startTheTimerOfTheFirstEvent() {
        this.timerOfTheFirstEvent = setTimeout(() => {
            this.firstOpenCell.switchVisibility();
            this.firstOpenCell = undefined;
            this.timerOfTheFirstEvent = undefined;
        }, 2000);
    }

    clearTheTimerOfTheFirstEvent() {
        clearTimeout(this.timerOfTheFirstEvent);
        this.timerOfTheFirstEvent = undefined;
    }

    startErrorTimer(firstCell, secondCell) {
        this.errorTimer = setTimeout( () => {
            firstCell.switchVisibility();
            secondCell.switchVisibility();
        }, 500);
    }

    checkMatchOpenCell() {
        return this.secondOpenCell.container.dataset.value === this.firstOpenCell.container.dataset.value;
    }
}

class Cell {
    constructor(value) {
        this.visibility = false;
        this.disabled = false;
        this.value = value;
    }

    disableCell() {
        this.disabled = true;
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
        container.dataset.value = this.value;

        container.dataset.disabled = this.disabled;
        // container.dataset.visibility = this.visibility;

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
