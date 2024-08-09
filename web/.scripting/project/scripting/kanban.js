
$(document).ready(function () {

            toastr.info(

                'Project Story Board',

                'viewing story board for: "'+ projectName() + '".',

                {timeOut: 8000});

    visualizeProjectUserStories();

	setInterval(visualizeProjectUserStories, 1000 * 16);

});

function visualizeProjectUserStories() {

	console.debug("enter > visualizeProjectUserStories");	

    $('#pageTitleBanner').html(projectName() );

    visualizeProjectBacklogUserStories();

    visualizeProjectTodoUserStories();

    visualizeProjectInprogressUserStories();

    visualizeProjectDoneUserStories();

}

function visualizeProjectBacklogUserStories() {

	console.debug("enter > visualizeProjectBacklogUserStories");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/story/status/backlog",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (responseData, status, jqXHR) {

            var trHTML = '';

            for (var i = 0; i < responseData.length; i++) {

                console.debug("responseData[i].id > ", responseData[i].id);

                console.debug("responseData[i].intention > ", responseData[i].intention);	

                console.debug("responseData[i].project > ", responseData[i].project);	

                console.debug("projectID / ", projectID());

                console.debug("projectName / ", projectName());	

                if(responseData[i].project == projectName()){

                    console.log("is a match");

                } else {

                console.log("is NOT a match");

                continue;

                }

                trHTML += '<div class="card card-light card-outline">';
                trHTML += ' <div class="card-header">';
                trHTML += ' <h5 class="card-title">';
                trHTML += responseData[i].intention;
                trHTML += ' </h5>';
                trHTML += ' <div class="card-tools">';

                trHTML += '<a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool btn-link">#';
                trHTML += responseData[i].id;
                trHTML += '</a>';
                trHTML += ' <a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool">';
                trHTML += ' <i class="fas fa-pen"></i>';
                trHTML += ' </a>';
                trHTML += ' </div>';
                trHTML += ' </div>';

                trHTML += ' <div class="card-body">';
                trHTML += ' <p>';
                trHTML += responseData[i].description;
                trHTML += ' </p>';
                trHTML += ' </div>';

                trHTML += ' </div>';

            }

            console.log("trHTML",trHTML);

            $('#backlog-body').html(trHTML);

        },

		error: function (jqXHR, status) {

			console.log("Something Went wrong" ,jqXHR);

		}

	});

}

function visualizeProjectTodoUserStories() {

	console.debug("enter > visualizeProjectTodoUserStories");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/story/status/todo",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (responseData, status, jqXHR) {

            var trHTML = '';

            for (var i = 0; i < responseData.length; i++) {

                console.debug("responseData[i].id > ", responseData[i].id);

                console.debug("responseData[i].intention > ", responseData[i].intention);	

                console.debug("responseData[i].project > ", responseData[i].project);	

                console.debug("projectID / ", projectID());

                console.debug("projectName / ", projectName());	

                if(responseData[i].project == projectName()){

                    console.log("is a match");

                } else {

                console.log("is NOT a match");

                continue;

                }

                trHTML += '<div class="card card-light card-outline">';
                trHTML += ' <div class="card-header">';
                trHTML += ' <h5 class="card-title">';
                trHTML += responseData[i].intention;
                trHTML += ' </h5>';
                trHTML += ' <div class="card-tools">';

                trHTML += '<a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool btn-link">#';
                trHTML += responseData[i].id;
                trHTML += '</a>';
                trHTML += ' <a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool">';
                trHTML += ' <i class="fas fa-pen"></i>';
                trHTML += ' </a>';
                trHTML += ' </div>';
                trHTML += ' </div>';

                trHTML += ' <div class="card-body">';
                trHTML += ' <p>';
                trHTML += responseData[i].description;
                trHTML += ' </p>';
                trHTML += ' </div>';

                trHTML += ' </div>';

            }

            console.log("trHTML",trHTML);

            $('#todo-body').html(trHTML);

        },

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}

function visualizeProjectInprogressUserStories() {

	console.debug("enter > visualizeProjectInprogressUserStories");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/story/status/inprogress",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (responseData, status, jqXHR) {

            var trHTML = '';

            for (var i = 0; i < responseData.length; i++) {

                console.debug("responseData[i].id > ", responseData[i].id);

                console.debug("responseData[i].intention > ", responseData[i].intention);	

                console.debug("responseData[i].project > ", responseData[i].project);	

                console.debug("projectID / ", projectID());

                console.debug("projectName / ", projectName());	

                if(responseData[i].project == projectName()){

                    console.log("is a match");

                } else {

                console.log("is NOT a match");

                continue;

                }

                trHTML += '<div class="card card-light card-outline">';
                trHTML += ' <div class="card-header">';
                trHTML += ' <h5 class="card-title">';
                trHTML += responseData[i].intention;
                trHTML += ' </h5>';
                trHTML += ' <div class="card-tools">';

                trHTML += '<a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool btn-link">#';
                trHTML += responseData[i].id;
                trHTML += '</a>';
                trHTML += ' <a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool">';
                trHTML += ' <i class="fas fa-pen"></i>';
                trHTML += ' </a>';
                trHTML += ' </div>';
                trHTML += ' </div>';

                trHTML += ' <div class="card-body">';
                trHTML += ' <p>';
                trHTML += responseData[i].description;
                trHTML += ' </p>';
                trHTML += ' </div>';

                trHTML += ' </div>';

            }

            console.log("trHTML",trHTML);

            $('#inprogress-body').html(trHTML);

        },

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}

function visualizeProjectDoneUserStories() {

	console.debug("enter > visualizeProjectDoneUserStories");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/story/status/done",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (responseData, status, jqXHR) {

            var trHTML = '';

            for (var i = 0; i < responseData.length; i++) {

                console.debug("responseData[i].id > ", responseData[i].id);

                console.debug("responseData[i].intention > ", responseData[i].intention);	

                console.debug("responseData[i].project > ", responseData[i].project);	

                console.debug("projectID / ", projectID());

                console.debug("projectName / ", projectName());	

                if(responseData[i].project == projectName()){

                    console.log("is a match");

                } else {

                console.log("is NOT a match");

                continue;

                }

                trHTML += '<div class="card card-light card-outline">';
                trHTML += ' <div class="card-header">';
                trHTML += ' <h5 class="card-title">';
                trHTML += responseData[i].intention;
                trHTML += ' </h5>';
                trHTML += ' <div class="card-tools">';

                trHTML += '<a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool btn-link">#';
                trHTML += responseData[i].id;
                trHTML += '</a>';
                trHTML += ' <a onclick="setEditStoryID(' + responseData[i].id  + ')" href="/story/update.html" class="btn btn-tool">';
                trHTML += ' <i class="fas fa-pen"></i>';
                trHTML += ' </a>';
                trHTML += ' </div>';
                trHTML += ' </div>';

                trHTML += ' <div class="card-body">';
                trHTML += ' <p>';
                trHTML += responseData[i].description;
                trHTML += ' </p>';
                trHTML += ' </div>';


                trHTML += ' </div>';

            }

            console.log("trHTML",trHTML);

            $('#done-body').html(trHTML);

        },

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}
