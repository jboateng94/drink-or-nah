$(function() {
	$('.likeButton').click(function() {
		var id = $(this).attr('data-id');
		$.ajax({
			url: '/api/beers/'+id,
			type: 'PATCH'
		}).catch(function(err) {
			console.log(err);
		}).done(function(response) {
			console.log(response);
		})
	})
})