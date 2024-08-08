
$(document).ready(function () {

	clearForm();

});

function clearForm(){

    $("#name").val("");

    $("#description").val("");

    $("#client").val("");

    $("#intention").val("");

}

function processForm() {

	console.debug("enter > processForm");	

	projectPayload = JSON.stringify({

		name: $("#name").val(),

		description:  $("#description").val(),

		client:  $("#client").val(),

		intention:  $("#intention").val(),

	});

	console.debug("projectPayload / ", projectPayload);

	$.ajax({

		type: "PUT",

		url: apiURLBase + "/project/",

		data: projectPayload,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

            notifySaveSuccess($("#name").val());

            clearForm();

		},

		error: function (jqXHR, status) {

			console.log("error during request /",jqXHR);

            notifySaveFailure($("#name").val());

		}

	});

}

function notifySaveSuccess(projectName) {

    toastr.success(

        'The project "'+ projectName +'" was created.',

        'Project Created',

        {timeOut: 5000});

}

function notifySaveFailure(projectName) {

    toastr.error(

        'The project "'+ projectName +'" WAS NOT created.',

        'Project Creation Failure',

        {timeOut: 5000}

    );   

}
