$(function(){
	setTimeout(function(){
		$('.grid').masonry({
		    itemSelector: '.grid-item',
		    columnWidth: 300,
		    isFitWidth: true
		  });
	}, 10000);
})