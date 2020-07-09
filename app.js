document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < 200; i++) {
        let div = document.createElement("div");
        document.getElementById("main").appendChild(div);
    }


    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.getElementById('score');
    const StartBtn = document.getElementById('start-button');
    const width = 10;
    
    




    
})