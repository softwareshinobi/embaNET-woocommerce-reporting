
$(document).ready(function () {  

	refreshAPIHealthCheckStatus();

});

function refreshAPIHealthCheckStatus(){

	refreshStandardAPIHealthCheckStatus();

}

function refreshStandardAPIHealthCheckStatus() {

	console.debug(" -> :: refreshSpecialAPIHealthCheckStatus()");	

	$.ajax({

		type: "GET",

		url: apiURLBase + "/health",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "html",

		success: function (data, status, jqXHR) {

			$("#standardAPI").removeClass("bg-dark");

			$("#standardAPI").removeClass("bg-success");

			$("#standardAPI").addClass("bg-success");

			$("#standardAPIText").html(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong");

			console.log(jqXHR);

			console.log(status);

			$("#standardAPI").removeClass("bg-dark");

			$("#standardAPI").removeClass("bg-success");

			$("#standardAPI").addClass("bg-dark");

			$("#standardAPIText").html("Standard API Appears To Be Down");

		}

	});

	//

	console.debug(" <- :: refreshSpecialAPIHealthCheckStatus()");
    
}
