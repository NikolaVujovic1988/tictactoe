let fields = [];

let currentShape = 'circle';

function fillShape(id) {
    if (currentShape == 'circle') {
        currentShape = 'cross';
    } else { 
        currentShape = 'circle';
    }

    fields[id] = currentShape;
    draw();
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