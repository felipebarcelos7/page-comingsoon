//countdown.init.js
$('#countdown').countdown('2022/11/30', function(event) {
var $this = $(this).html(event.strftime(''
    + '<div class="count-down"> <span class="count-number">%D</span> <span class="count-head position-relative d-block">Dias</span></div> '
    + '<div class="count-down"> <span class="count-number">%H</span> <span class="count-head position-relative d-block">Horas</span></div> '
    + '<div class="count-down"> <span class="count-number">%M</span> <span class="count-head position-relative d-block">Minutos</span></div> '
    + '<div class="count-down"> <span class="count-number">%S</span> <span class="count-head position-relative d-block">Segundis</span></div>'
    ));
});

$('#eventdown').countdown('2022/11/30', function(event) {
var $this = $(this).html(event.strftime(''
    + '<div class="count-down"> <span class="count-number">%D</span> <span class="count-head position-relative d-block">Dias</span></div> '
    + '<div class="count-down"> <span class="count-number">%H</span> <span class="count-head position-relative d-block">Horas</span></div> '
    + '<div class="count-down"> <span class="count-number">%M</span> <span class="count-head position-relative d-block">Minutos</span></div> '
    + '<div class="count-down"> <span class="count-number">%S</span> <span class="count-head position-relative d-block">Segundos</span></div>'
    ));
});