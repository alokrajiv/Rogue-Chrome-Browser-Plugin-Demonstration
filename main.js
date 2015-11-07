$(function () {
	console.log("Hello World");
	console.log($("form"));
	$("form").submit(function (e) {
		//var $this = $(this);
		console.log("Moosassu");
		e.preventDefault();
	});
});