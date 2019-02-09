$(document).ready(function () {
    $('#spin-wheel').click(function () {
        $('#inner-circle-1 h2').addClass("disabled");
        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-4 h2').addClass("disabled");

        TweenMax.to('.outer-circle', 1, {
            rotation: 90, 
            ease: Linear.easeNone, 
            repeat: 0
        })

        TweenMax.to('.inner-circle', 1, {
            scale: 1,
            ease: Linear.easeNone,
            repeat: 0
        })
    });

    

    $('#inner-circle-1').click(function () {
        $('#inner-circle-1 h2').removeClass("disabled");
        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-4 h2').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            scale: 1,
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1.5, {
            rotation: 0,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-1', 0.5, {
            scale: 1.5,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 2
        })
    });

    $('#inner-circle-2').click(function () {
        $('#inner-circle-2 h2').removeClass("disabled");
        $('#inner-circle-1 h2').addClass("disabled");
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-4 h2').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            scale: 1,
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1.5, {
            rotation: 270,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-2', 0.5, {
            scale: 1.5,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 2
        })
    });

    $('#inner-circle-3').click(function () {
        $('#inner-circle-3 h2').removeClass("disabled");
        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-1 h2').addClass("disabled");
        $('#inner-circle-4 h2').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            scale: 1,
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1.5, {
            rotation: 180,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-3', 0.5, {
            scale: 1.5,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 2
        })
    });

    $('#inner-circle-4').click(function () {
        $('#inner-circle-4 h2').removeClass("disabled");
        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-1 h2').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            scale: 1,
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1.5, {
            rotation: 90,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-4', 0.5, {
            scale: 1.5,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 2
        })
    });
});



