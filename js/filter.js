$(function (){
    $("#filter li").click(function (){
        var category = $(this).html();
        //console.log("category is "+category);
        $("#portfolio li").fadeOut("fast");
        //for each filter li removeClass active 
        //not for only this li
        $("#filter li").removeClass("active");
        //add class active for only this li
        $(this).addClass("active");
        //loop for each list item
        $("#portfolio li").each(function(){
            if($(this).hasClass(category)){
               
                $(this).fadeIn("fast");
            }
        });
    });
});
    