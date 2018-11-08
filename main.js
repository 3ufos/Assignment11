$(document).ready(function(){

	$('button').click(function(){
		var task=$("input[id=addtask]").val();
		$('ul').append("<li>" + task + "</li>");
	});

	 $(document).on("click","li", function(){
    	$(this).toggleClass('cross');
    });

	 $(document).on("dblclick","li", function(){
    	$(this).fadeOut();
    });

});

// this is so simple that i'm almost certain i did it wrong??? LOL