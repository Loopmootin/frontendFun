
/* RANDOM PLACE BRICKS */
let placeRandom = document.querySelectorAll(".brick img");

placeRandom.forEach(element => {
    let randomNumber = Math.floor((Math.random() * 80) + 1);

    element.style.transform = "translate(" + randomNumber + "%, " + randomNumber + "%)";
});


/* FINISH GAME */
let finishGame = document.getElementById("finish-game");

finishGame.addEventListener('click', function () {
    let placeReset = document.querySelectorAll(".brick img");

    placeReset.forEach(element => {

        element.style.transform = "translate(0, 0)";
    });
}, true);


/* CHANGE BACKGROUND IMAGE */
let changePuzzleCat = document.getElementById("cat-puzzle");
let changePuzzleWin = document.getElementById("win-puzzle");
let changeBackground = document.querySelectorAll(".brick img");

changePuzzleCat.addEventListener('click', function () {
    
    changeBackground.forEach(element => {
        let newSrc = element.src.replace("win", "kitty");
        element.src = newSrc;
    });
}, true);

changePuzzleWin.addEventListener('click', function () {

    changeBackground.forEach(element => {
        let newSrc = element.src.replace("kitty", "win");
        element.src = newSrc;
    });
}, true);


/* HELP BUTTON */
changePuzzleWin.addEventListener('click', function () {

}, true);


/* MOVE BRICKS */
let move = document.querySelectorAll(".brick img");

move.forEach(element => {

    // MOVE A BRICK
    if (element) {

        let mousePosition;
        let offset = [0, 0];
        let isDown = false;

        element.addEventListener('mousedown', function (e) {

            isDown = true;
            offset = [
                element.offsetLeft - e.clientX,
                element.offsetTop - e.clientY
            ];

            //element.style.zIndex = element.style.zIndex + 1;
        }, true);

        document.addEventListener('mouseup', function () {

            isDown = false;
        }, true);

        document.addEventListener('mousemove', function (event) {

            event.preventDefault();
            if (isDown) {

                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };

                element.style.left = (mousePosition.x + offset[0]) + 'px';
                element.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        }, true);
    }
});
