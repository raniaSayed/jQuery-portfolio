$(function () {
	var current_li;

	//sortable is ui function 
	$("#portfolio").sortable();
	function setImg(src,id){
		$("#main").attr("src",src);
		var path ="text/"+id+".txt";
		$.get(path ,function(data){
			$("#description p").html(data);

		});

	}
	$("#portfolio img").click(function(){
		var src = $(this).attr("src");
		var id =$(this).attr("id");
		current_li = $(this).parent(); /* parent is the li contain the img */
		setImg(src,id);
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
		id = next_li.children("img").attr("id");
		setImg(next_src,id);
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
		id = previous_li.children("img").attr("id");
		setImg(previous_src,id);
		current_li =previous_li;
	});

	$("#left ,#right").mouseover(function(){
		$(this).css("opacity",".75");
	});
	$("#left ,#right").mouseleave(function(){
		$(this).css("opacity",".5");
	});

});