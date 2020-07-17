document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < 200; i++) {
        let div = document.createElement("div");
        document.getElementById("main").appendChild(div);
    }

    let color = { background: "#5c2a3b",     // background
                        wall: "#d83c66",     // walls
                        solid: "#49b5ab",     // solid tetromino
                        tetromino: "#e97539" };   // falling tetromino


    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.getElementById('score');
    const StartBtn = document.getElementById('start-button');
    const width = 10;
    
    // Tetrominos

    const jShape = [0,0,1, 0,0,1, 0,1,1];

    const lShape = [1,0,0, 1,0,0, 1,1,0];

    const tShape = [0,0,0, 0,1,0, 1,1,1];

    const sShape = [0,0,0, 0,1,1, 0,1,1];

    const zShape = [0,0,0, 1,1,0, 0,1,1];

    const squareShape = [1,1,0, 1,1,0, 0,0,0];

    const iShape = [0,0,0, 1,1,1, 0,0,0];

    const tetrominos = [jShape, lShape, tShape, sShape, zShape, squareShape, iShape];

    let current = [0,0,0, 0,0,0, 0,0,0];
    let next = [0,0,0, 0,0,0, 0,0,0];

    function makeRandom() {
        let index = Math.floor((Math.random() * tetrominos.length));
        return [...tetrominos[index]];
    }

    current = makeRandom();
    next = makeRandom();

    




    
})