// I edited this jQuery dropdown menu by Chris Coyier: css-tricks.com/simple-jquery-dropdowns
// using what we learned in the Week 10 jQuery lab tutorial (which was coded by Stanley Lai)
// (I added a toggle function and made it so you had to click for the menu; not just hover)
// - Olivya

$(function(){
    $("ul.dropdown li").click(function(){
    	$("ul.dropdown li").toggleClass("on");	
    	
			if ($("ul.dropdown li").hasClass("on")) {
				$(this).addClass("hover");
				$('ul:first',this).css('visibility', 'visible');
			}
		
			else {
				$(this).removeClass("hover");
				$('ul:first',this).css('visibility', 'hidden');
			}
			
	});
		
	$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});