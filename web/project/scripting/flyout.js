
$(document).ready(function () {

   // console.log("responsddddddddddd");

    loadCurrentProject();

    loadAllProjects();

	setInterval(loadCurrentProject, 1000 * 4);

	setInterval(loadAllProjects, 1000 * 8);

});

function loadCurrentProject() {

    $('#projectBanner').html(projectName());   

}

function loadAllProjects() {

// console.debug("enter > loadAllProjects");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/project/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            paintProjectListData(data);

		},

		error: function (jqXHR, status) {

			console.log("error... / " + jqXHR);

		}

	});

}

function paintProjectListData(responseData) {

    var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {

        //console.log("responseData[i].name / " + responseData[i].name);

        trHTML += '<button class="btn btn-lg btn-info" onclick="setProject('+responseData[i].id + ",\'" +responseData[i].name +'\')" >';

        trHTML += responseData[i].name;

        trHTML += '</button>';

        trHTML += '<br/>';

        trHTML += '<br/>';
		      
    }

    $('#projectSwitcherArea').html(trHTML);   

}
