
$(document).ready(function () {

    fetchCurrentProjects();

	setInterval(fetchCurrentProjects, 1000 * 30);
	
});

function fetchCurrentProjects() {

	console.debug("enter > fetchCurrentProjects");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/project/",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            exportCurrentProjects(data);

		},

		error: function (exception, status) {

			console.log("error during projects pull / ", exception);

		}

	});

}

function exportCurrentProjects(responseData) {

    console.debug("enter > exportCurrentProjects");	

    console.debug("responseData / " + responseData);

    var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {

        console.debug("responseData / " + responseData[i]);

        trHTML += '<tr>';

        trHTML += '<td class="col-1">' + '<img style="visibility: hidden;" alt="Software Shinobi" class="table-avatar" src="../dist/img/avatar.png">' + '</td>';

        trHTML += '<td>' + responseData[i].id + '</td>';

        trHTML += '<td>' + responseData[i].name + '</td>';

        trHTML += '<td>' + responseData[i].description + '</td>';

        trHTML += '<td>' + responseData[i].intention + '</td>';

        trHTML += '    <td class="project-actions text-left">';

        trHTML += '<a onclick="setProject('+responseData[i].id + ',\'' + responseData[i].name +'\')" class="1qq1 btn btn-primary btn-sm" href="kanban.html">';
        trHTML += '    <i class="fas fa-folder">';
        trHTML += '    </i>';
        trHTML += '    kanban';
        trHTML += '    </a>';
//        trHTML += '    </td>	';

        trHTML += '  ';
//        trHTML += '    <td class="project-actions text-left">';

        trHTML += '<a onclick="setProject('+responseData[i].id + ',\'' + responseData[i].name +'\')" class="1qq1 btn btn-warning btn-sm" href="edit.html">';
        trHTML += '    <i class="fas fa-edit">';
        trHTML += '    </i>';
        trHTML += '    edit';
        trHTML += '    </a>';

        trHTML += '    </td>	';

    }

    console.log("trHTML / " + trHTML);

    $('#projectList > tbody').html(trHTML);   

    }
