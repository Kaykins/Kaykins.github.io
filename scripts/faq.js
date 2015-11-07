
$(document).ready(function(){
    $(".answer").hide();
	
    $(".question").click(function(){
        $(this).next(".answer").slideToggle(100);
		$(this).parent(".item").toggleClass("open");
   
   });
   
});


