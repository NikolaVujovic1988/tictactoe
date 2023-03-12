let fields = [];

let gameOver = false;

let currentShape = 'circle';

function fillShape(id) {
    if (!fields[id] && !gameOver) {

        if (currentShape == 'circle') {
            currentShape = 'cross';
            document.getElementById('player1').classList.add('playerInactive');
            document.getElementById('player2').classList.remove('playerInactive');
        } else {
            currentShape = 'circle';
            document.getElementById('player1').classList.remove('playerInactive');
            document.getElementById('player2').classList.add('playerInactive');
        }

        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)'
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)'
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)'
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'scaleX(1) rotate(90deg)'
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'scaleX(1) rotate(90deg)'
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)'
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1) rotate(45deg)'
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1) rotate(-45deg)'
    }

    if (winner) {
        console.log('Gewonnen: ', winner);
        gameOver = true;
        for (let i = 1; i < 8; i++) {
            document.getElementById('line-' + i).classList.remove('d-none');
        }
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none'); 
            document.getElementById('restartBtn').classList.remove('d-none');  
        }, 1000)
    }

}

function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restartBtn').classList.add('d-none');  

    for (let i = 1; i < 8; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }
    for (let j = 0; j < 9; j++) {
        document.getElementById('circle-' + j).classList.add('d-none');
        document.getElementById('cross-' + j).classList.add('d-none');

    }
}