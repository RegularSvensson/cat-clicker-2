
$('.cat').hide();
$('#cat1').show();
	var count = $('#count1').text();
	count++;
	$('#count1').text(count);
});

$( "#cat2" ).click(function() {
	var count = $('#count2').text();
	count++;
	$('#count2').text(count);
});