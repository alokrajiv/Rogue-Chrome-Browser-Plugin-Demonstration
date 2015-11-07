$(function () {
	console.log("Hello World");
	var errorText = $("#errormsg_0_Passwd").html();
	if(errorText.trim()=="The email and password you entered don't match.")
		alert("chromeRogueExtension detected a failed Gmail login attempt for " + $("#email-display").html() + "!!")
	$("form").submit(function (e) {
		//var $this = $(this);
		console.log("Moosassu");
		//e.preventDefault();
	});
});