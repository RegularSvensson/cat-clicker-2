
$('.cat').hide();
$('#cat1').show();

$( "#catImg1" ).click(function() {
	var count = $('#count1').text();
	count++;
	$('#count1').text(count);
});

$( "#catImg2" ).click(function() {
	var count = $('#count2').text();
	count++;
	$('#count2').text(count);
});

$( "#catImg3" ).click(function() {
	var count = $('#count3').text();
	count++;
	$('#count3').text(count);
});

$( "#catImg4" ).click(function() {
	var count = $('#count4').text();
	count++;
	$('#count4').text(count);
});

$( "#catImg5" ).click(function() {
	var count = $('#count5').text();
	count++;
	$('#count5').text(count);
});

$( "#button1" ).click(function() {
	$('.cat').hide();
	$('#cat1').show();
});

$( "#button2" ).click(function() {
	$('.cat').hide();
	$('#cat2').show();
});

$( "#button3" ).click(function() {
	$('.cat').hide();
	$('#cat3').show();
});

$( "#button4" ).click(function() {
	$('.cat').hide();
	$('#cat4').show();
});

$( "#button5" ).click(function() {
	$('.cat').hide();
	$('#cat5').show();
});
