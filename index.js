const boardsBox = document.querySelector('#boards');
const randomBtn = document.querySelector('#randomBtn')
const resetBoardBtn = document.querySelector('#resetBoard')
const numRange = 300;

const giveRandomNumber = () => {
    return Math.floor((Math.random() * numRange + 1));
}

const generateBoardValues = () => {
    const randNums = [];

    for(let i = 1; randNums.length < 76; i++) {
        const num = giveRandomNumber()
        if(!randNums.includes(num)) {
            randNums.push(num);
        } else {
            console.log('already there' + num)
        }
    } 
     return randNums;
} 

const displayRandNumber = (num) => {
    const span = document.querySelector('#randNumberDisplay')

    span.textContent = num;
}

const addBoard = function () {
    const randNums = generateBoardValues()

    const board = document.createElement('div');
    board.classList = 'board'

    for(num of randNums) {
        const cell = document.createElement('div');
        cell.classList = 'board-cell';
        cell.innerText = num.toString();
        
        board.appendChild(cell)
        boardsBox.appendChild(board)
    }
}

addBoard()


const compareNumbers = () => {
    const cells = document.querySelectorAll('.board-cell');
    const num = giveRandomNumber()

    displayRandNumber(num)

    for(let cell of cells) {
        cell.style.backgroundColor = "green";
        if(cell.innerText === num.toString()) {
            cell.style.backgroundColor = "white";
        }
    }
}

const resetBoard = (board) => {
    boardsBox.innerHTML = '';
    const span = document.querySelector('#randNumberDisplay');
    span.textContent = '';

    addBoard();
}


randomBtn.addEventListener('click', compareNumbers);
resetBoardBtn.addEventListener('click', resetBoard);

