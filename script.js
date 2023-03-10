let fields = [];

let currentShape = 'circle';

function fillShape(id) {
    if (currentShape == 'circle') {
        currentShape = 'cross';
    } else { 
        currentShape = 'circle';
    }

    fields[id] = currentShape;
    console.log(fields);
}