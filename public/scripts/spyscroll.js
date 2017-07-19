/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 52
});

/* smooth scrolling sections */
$(function () {
            
            $('a[href^="#"]').click(function(event) {
            var id = $(this).attr("href");
            var offset = 20;
            var target = $(id).offset().top - offset;
            
            $('html, body').animate({scrollTop:target}, 800);
            event.preventDefault();
            });
            
            });