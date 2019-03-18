
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
