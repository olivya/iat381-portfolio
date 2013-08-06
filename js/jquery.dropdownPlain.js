// I edited this jQuery dropdown menu by Chris Coyier: css-tricks.com/simple-jquery-dropdowns
// using what we learned in the Week 10 jQuery lab tutorial.
// (I added a toggle function and made it so you had to click for the menu; not just hover,
// as well as adding fade in/out functions.)
// - Olivya
// { Full list of resources is in Stretch Goals PDF }

$(function(){
    $("ul.dropdown li").click(function(){
    	$("ul.dropdown li").toggleClass("on");	
    	
			if ($("ul.dropdown li").hasClass("on")) {
				$(this).addClass("hover");
				$('ul:first',this).css('visibility', 'visible').hide().fadeIn();
				// show/hide arrows:
				$("#side").hide();
				$("#down").css('visibility', 'visible');
			}
		
			else {
				$(this).removeClass("hover");
				$('ul:first',this).fadeOut("fast");
				// show/hide arrows:
				$("#side").show();
				$("#down").css('visibility', 'hidden');
			}
			
	});
		
	$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});