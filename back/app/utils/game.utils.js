function generateCode() {
    let result = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function initGrid(xLength, yLength) {
    const grid = new Array(xLength);

    for (let cell in grid) {
        cell = new Array(yLength);
    }

    return grid;
}

function populateGrid(grid) {

    return grid;
}

function getNewGrid(xLength = 50, yLength = 50) {
    let emptyGrid = initGrid(xLength, yLength);

    return populateGrid(emptyGrid);
}

export {generateCode, getNewGrid};
