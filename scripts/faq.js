
$(document).ready(function(){
    $(".answer").hide();
	
    $(".question").click(function(){
        $(this).next(".answer").slideToggle(100);
		$(this).parent(".item").toggleClass("open");
   
   });

   $(document).ready(function(){
      $('body').append('<div id="toTop" class="btn"> Back to top</div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
   
});


