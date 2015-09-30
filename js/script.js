$(function () {
	var current_li;
//as keypress don't handling back space so we use keyup
	$("#search").keyup(function(){
		var current_query = $(this).val();
		if(current_query!=""){
			//hide same as fadeOut
		$("#portfolio li").hide();
		$("#portfolio li").each(function(){
			var current_keyword = $(this).attr("data-keywords");
			//current_keyword same as current_query or more than it
			if(current_keyword.indexOf(current_query)>=0){
				//show same as fadeIn 
				$(this).show();

			}
			});

		}
		else{
			$("#portfolio li").show();
		}
		

	});
	//sortable is ui function 
	$("#portfolio").sortable({stop: 
		function(){

			var list_content = $("#portfolio").html();
			$.post("change.php",{list:list_content});

		}
	});

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