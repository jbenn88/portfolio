$(document).ready(function() {
  $('.nav li').fadeTo('slow', 0.3);
    $(".nav li").mouseenter(function(){
        $(this).fadeTo("slow", 1);
        $(this).css("color: red");
    });
    $('.nav li').mouseleave(function (){
      $(this).fadeTo('slow', 0.3);
    });

    $('.button').mouseenter(function () {
      $(this).addClass('active');
    });
    $('.button').mouseleave(function (){
      $(this).removeClass('active');
    });

});
