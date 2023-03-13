let fields = [];
let firstPlayer = [];
let secondPlayer = [];

let gameOver = false;

let currentShape = 'circle';

function addPlayers() {
    let player1 = document.getElementById('player1Input').value;
    firstPlayer.push(player1);

    let player2 = document.getElementById('player2Input').value;
    secondPlayer.push(player2);

    document.getElementById('playerNames').classList.add('d-none');
    render(); 
}

function render() {
    document.getElementById('body').innerHTML = returnContent();
}

function returnContent() {
    return `
    <button class="gameOver d-none" id="winnerBtn"> won!</button>
    <button onclick="restart()" class="restartBtn d-none" id="restartBtn">RESTART</button>

    <div class="players">
        <div id="player1" class="player1">
            <img id="player1" class="" src="./img/cross.png" alt="kreuz">
            <p>${firstPlayer}</p>
        </div>
        <div class="playerInactive player1" id="player2">
            <img class="" src="./img/circle.png" alt="kreis">
            <p>${secondPlayer}</p>
        </div>
    </div>



    <table>
        <div class="lineOver">
            <div id="line-1" class="horizontal-line" style="top: 47px; right: -140px;"></div>
            <div id="line-2" class="horizontal-line" style="top: 154px; right: -140px;"></div>
            <div id="line-3" class="horizontal-line" style="top: 261px; right: -140px;"></div>

            <div id="line-4" class="horizontal-line make-vertical" style="top: 152px; right: -140px;"></div>
            <div id="line-5" class="horizontal-line make-vertical" style="top: 152px; right: -33px;"></div>
            <div id="line-6" class="horizontal-line make-vertical" style="top: 152px; right: -246px;"></div>

            <div id="line-7" class="horizontal-line make-vertical"
                style="top: 154px; left: -140px; transform: rotate(45deg) scaleX(0);"></div>
            <div id="line-8" class="horizontal-line make-vertical"
                style="top: 154px; left: -140px; transform: rotate(-45deg) scaleX(0)"></div>


            <tr>
                <td onclick="fillShape(0)">
                    <img id="circle-0" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-0" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
                <td onclick="fillShape(1)">
                    <img id="circle-1" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-1" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
                <td onclick="fillShape(2)">
                    <img id="circle-2" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-2" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
            </tr>
            <tr>
                <td onclick="fillShape(3)">
                    <img id="circle-3" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-3" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
                <td onclick="fillShape(4)">
                    <img id="circle-4" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-4" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
                <td onclick="fillShape(5)">
                    <img id="circle-5" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-5" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
            </tr>
            <tr>
                <td onclick="fillShape(6)">
                    <img id="circle-6" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-6" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
                <td onclick="fillShape(7)">
                    <img id="circle-7" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-7" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
                <td onclick="fillShape(8)">
                    <img id="circle-8" class="shape d-none" src="./img/circle.png" alt="kreis">
                    <img id="cross-8" class="shape d-none" src="./img/cross.png" alt="kreuz">
                </td>
            </tr>
        </div>
    </table>
    `;
}

function fillShape(id) {
    if (!fields[id] && !gameOver) {

        if (currentShape == firstPlayer) {
            currentShape = secondPlayer;
            document.getElementById('player1').classList.add('playerInactive');
            document.getElementById('player2').classList.remove('playerInactive');
        } else {
            currentShape = firstPlayer;
            document.getElementById('player1').classList.remove('playerInactive');
            document.getElementById('player2').classList.add('playerInactive');
        }

        fields[id] = currentShape;
        draw();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == firstPlayer) {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
        if (fields[i] == secondPlayer) {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
    }
    checkForWin();
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && !!fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)'
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && !!fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)'
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && !!fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)'
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && !!fields[3]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'scaleX(1) rotate(90deg)'
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && !!fields[4]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'scaleX(1) rotate(90deg)'
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && !!fields[5]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)'
    }
    if (fields[0] == fields[4] && fields[0] == fields[8] && !!fields[4]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1) rotate(45deg)'
    }
    if (fields[2] == fields[4] && fields[2] == fields[6] && !!fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1) rotate(-45deg)'
    }

    if (winner) {
        gameOver = true;
        for (let i = 1; i < 9; i++) {
            document.getElementById('line-' + i).classList.remove('d-none');
        }
        setTimeout(function () {
            document.getElementById('winnerBtn').classList.remove('d-none');
            document.getElementById('restartBtn').classList.remove('d-none');  
        }, 1000)
    }
    showWinner(winner);
    noWinner();
}

function showWinner(winner) {
    document.getElementById('winnerBtn').innerHTML = `${winner}<br> WON!!!`;
}

function noWinner() {
    if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8]) {
        setTimeout(function () {
            document.getElementById('restartBtn').classList.remove('d-none');
        }, 1000);
    }
}

function restart() {
    gameOver = false;
    fields = [];
    winner = [];
    document.getElementById('winnerBtn').classList.add('d-none');
    document.getElementById('restartBtn').classList.add('d-none');  

    for (let index = 1; index < 9; index++) {
        document.getElementById('line-' + index).style.transform = 'scaleX(0.0)';
    }
    for (let j = 0; j < 9; j++) {
        document.getElementById('circle-' + j).classList.add('d-none');
        document.getElementById('cross-' + j).classList.add('d-none');
    }
}