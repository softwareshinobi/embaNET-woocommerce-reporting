
$(document).ready(function () {
    
    loadProjectDetails();

    //alert("edit.js");

});

function loadProjectDetails() {

	console.debug("enter > loadProjectDetails");	

    var currentProjectID = projectID();

	console.debug("    projectID / " + currentProjectID);

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/project/" + currentProjectID,

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (project, status, jqXHR) {

            toastr.info(

                'Edit Project',

                'You are editing project "'+ project.name + '"',

                {timeOut: 8000});

        	console.debug("    project / " + project);

            $("#id").val(project.id);

            $("#name").val(project.name);

            $("#description").val(project.description);

            $("#intention").val(project.intention);

            $("#client").val(project.client);

            $("#status").val(project.status).change();

		},

		error: function (exception, status) {


			console.log("error / " + exception);

		}

	});

}

function pushEditedProject() {

	console.debug("enter > pushEditedProject");	

    currentProjectID = $("#id").val();

    currentProjectName = $("#name").val();

	projectPayload = JSON.stringify({

        id: currentProjectID,

		name: $("#name").val(),

		description: $("#description").val(),

		client: $("#client").val(),

		intention: $("#intention").val(),

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

            notifyEditSuccess(currentProjectName);

		},

		error: function (jqXHR, status) {

			console.log("error / ", jqXHR);

            notifyEditFailure(currentProjectName);

		}

	});

}

function notifyEditSuccess(projectName) {

    toastr.success(

        'Project Updated',

        'The project "'+ projectName +'" was updated.',

        {timeOut: 5000});

}

function notifyEditFailure(projectName) {

    toastr.error(

        'Project Update Failure',

        'The project "'+ projectName +'" WAS NOT updated.',

        {timeOut: 5000}

    );   

}


function deleteProject() {

	console.debug("enter > deleteStory");	

   	console.debug("project id / ", projectID());

	$.ajax({

		type: "DELETE",

		url: apiURLBase + "/project/" + projectID(),

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

            alert("deleted!");

//            notifyUpdateSuccess(userStoryName);

		},

		error: function (jqXHR, status) {

            alert("not deleted :(");

			console.log("error during request /", jqXHR);

            notifyUpdateFailure(userStoryName);

		}

	});

}
