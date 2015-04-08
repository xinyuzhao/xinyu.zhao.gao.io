var chosen_btn_class = 'btn-primary';

$(function() {
  $.material.init();

  var pageNumbers = {};
  var numberToBtn = [];
  $('.buttons').children().map(function(_,btn) {
    var id = $(btn).attr('href');
    var number = $(id).index() + 1;
    pageNumbers[id] = number;
    numberToBtn[number] = btn;
    numberToBtn[number+1] = btn;
  });

  $('#book').turn({
    width: 900,
    height: 500,
    autoCenter: true,
    gradients: true,
  });

  $('.buttons').children().click(function() {
    var id = $(this).attr('href');
    $('#book').turn("page", pageNumbers[id]);
  });

  $('#book').bind('turned', function(_, number, _) {
    console.log(number)
    $('.buttons').children().removeClass('btn-primary');
    $(numberToBtn[number]).addClass('btn-primary');
  });

  if (window.location.hash) {
    $('#book').turn('page', pageNumbers[window.location.hash]);
  }

});
