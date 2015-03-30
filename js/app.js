$( "#cat" ).click(function() {
	var count = $('#count').text();
	count++;
	$('#count').text(count);
});