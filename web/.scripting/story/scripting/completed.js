
$(document).ready(function () {

    paintStoryInProgress();

	setInterval(paintStoryInProgress, 1000 * 8);
	
});

function paintStoryInProgress() {

	console.debug("enter > paintStoryInProgress");	

	$.ajax({

		type: "GET",
		
		url: apiURLBase + "/story/status/done",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            injectStoryContentIntoTable(data);           

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}

function injectStoryContentIntoTable(story) {

    var html = '';

    for (var index = 0; index < story.length; index++) {

        html += '<tr>';

//        html += '<td>' + story[index].id + '</td>';

        html += '<td class="col-1">' + '<img styles="visibility:hidden" alt="Software Shinobi" class="table-avatar" src="../dist/img/avatar.png">' + '</td>';

        html += '<td>' + story[index].name + '</td>';

        html += '<td>' + story[index].description + '</td>';

        html += '<td>' + story[index].intention + '</td>';

        html += '<td>' + story[index].status + '</td>';

html += '    <td class="project-actions text-left">';

//html += '    <a onclick="setViewStoryID(' + story[index].id  + ')" class="btn btn-primary btn-sm" href="view.html">';
//html += '    <i class="fas fa-folder">';
//html += '    </i>';
//html += '    View';
//html += '    </a>';

html += '    <a onclick="setEditStoryID(' + story[index].id  + ')" class="btn btn-secondary btn-sm" href="update.html">';
html += '    <i class="fas fa-folder">';
html += '    </i>';
html += '    View';
html += '    </a>';

html += '    </td>	';

}

    $('#project-list  > tbody').html(html);   

}
