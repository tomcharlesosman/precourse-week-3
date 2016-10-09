$(document).ready(function () {
     $('h1').click(function () {
          console.log('clicked')
     });
});

$('.snapchat').mouseenter(function () {
     $('.snapchat').addClass('animated hinge 1');
});

$('.fadeInText').addClass('animated bounceInDown');
