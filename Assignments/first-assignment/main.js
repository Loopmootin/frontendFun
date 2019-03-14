

let move1 = document.getElementById('top1left1');
let move2 = document.getElementById('top1left2');
// let move3 = document.getElementById('top1left3');
// let move4 = document.getElementById('top1left4');
// let move5 = document.getElementById('top1left5');
// let move6 = document.getElementById('top2left1');
// let move7 = document.getElementById('top2left2');
// let move8 = document.getElementById('top2left3');
// let move9 = document.getElementById('top2left4');
// let move10 = document.getElementById('top2left5');
// let move11 = document.getElementById('top3left1');

//let move1 = document.querySelectorAll(".brick");


// MOVE A BRICK
if (move1) {
    
    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move1.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move1.offsetLeft - e.clientX,
            move1.offsetTop - e.clientY
        ];
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

            move1.style.left = (mousePosition.x + offset[0]) + 'px';
            move1.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}


/*
// MOVE A BRICK
if (move2) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move2.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move2.offsetLeft - e.clientX,
            move2.offsetTop - e.clientY
        ];
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
            move2.style.left = (mousePosition.x + offset[0]) + 'px';
            move2.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move3) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move3.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move3.offsetLeft - e.clientX,
            move3.offsetTop - e.clientY
        ];
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
            move3.style.left = (mousePosition.x + offset[0]) + 'px';
            move3.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move4) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move4.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move4.offsetLeft - e.clientX,
            move4.offsetTop - e.clientY
        ];
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
            move4.style.left = (mousePosition.x + offset[0]) + 'px';
            move4.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move5) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move5.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move5.offsetLeft - e.clientX,
            move5.offsetTop - e.clientY
        ];
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
            move5.style.left = (mousePosition.x + offset[0]) + 'px';
            move5.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move6) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move6.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move6.offsetLeft - e.clientX,
            move6.offsetTop - e.clientY
        ];
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
            move6.style.left = (mousePosition.x + offset[0]) + 'px';
            move6.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move7) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move7.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move7.offsetLeft - e.clientX,
            move7.offsetTop - e.clientY
        ];
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
            move7.style.left = (mousePosition.x + offset[0]) + 'px';
            move7.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move8) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move8.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move8.offsetLeft - e.clientX,
            move8.offsetTop - e.clientY
        ];
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
            move8.style.left = (mousePosition.x + offset[0]) + 'px';
            move8.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move9) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move9.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move9.offsetLeft - e.clientX,
            move9.offsetTop - e.clientY
        ];
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
            move9.style.left = (mousePosition.x + offset[0]) + 'px';
            move9.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move10) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move10.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move10.offsetLeft - e.clientX,
            move10.offsetTop - e.clientY
        ];
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
            move10.style.left = (mousePosition.x + offset[0]) + 'px';
            move10.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// MOVE A BRICK
if (move11) {

    let mousePosition;
    let offset = [0, 0];
    let isDown = false;

    move11.addEventListener('mousedown', function (e) {

        isDown = true;
        offset = [
            move11.offsetLeft - e.clientX,
            move11.offsetTop - e.clientY
        ];
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
            move11.style.left = (mousePosition.x + offset[0]) + 'px';
            move11.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}
*/