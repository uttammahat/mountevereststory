var lFollowX = 0
    , lFollowY = 0
    , x = 0
    , y = 0
    , friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
    $('.bgMove').css({
        '-webit-transform': translate
        , '-moz-transform': translate
        , 'transform': translate
    });
    window.requestAnimationFrame(moveBackground);
}
$(window).on('mousemove click', function (e) {
    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
});
moveBackground();
/*georgeimg*/
$('.js-tilt').tilt({
    scale: 1.1
    , glare: true
    , maxGlare: 0.3
});


/*preloader*/
$(document).ready(function () {
    setTimeout(function () {
        $("#loader-wrapper").fadeOut("slow");
//        $("#preloader").addClass('slide');
    }, 400);
});
