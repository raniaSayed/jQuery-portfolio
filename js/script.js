$(function () {
	var current_li;
	$("#portfolio img").click(function(){
		var src = $(this).attr("src");
		current_li = $(this).parent(); /* parent is the li contain the img */
		$("#main").attr("src",src);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();

	});

	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();

	});

	$("#right").click(function(){
		if(current_li.is(":last-child")){
			var next_li = $("#portfolio li").first();
		}
		else{
			var next_li = current_li.next();
		}
		next_src = next_li.children("img").attr("src");
		$("#main").attr("src",next_src);
		current_li =next_li;


	});
	$("#left").click(function(){
		if(current_li.is(":first-child")){
			var previous_li = $("#portfolio li").last();
		}
		else{
			var previous_li = current_li.prev();
		}
		previous_src = previous_li.children("img").attr("src");
		$("#main").attr("src",previous_src);
		current_li =previous_li;
	});
});