
$(document).ready(function () {

	// the first run starts after waiting first
	
	setInterval(displayAllActivityRecords,1000);
	
});


function displayAllActivityRecords() {

	console.debug(" -> :: displayAllActivityRecords()");	

	$.ajax({

		type: "GET",
		
		url: "https://apis.napkinexchange.softwareshinobi.digital/leaderboard/",

//		url: "http://localhost:8888/leaderboard",

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {
            
            setResultsArea(data);
            
            showResultsArea();

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

}


function setResultsArea(responseData) {

    var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {

        trHTML += '<tr>';

        trHTML += '<td class="METADATA DEBUG">' + responseData[i].ranking + '</td>';

        trHTML += '<td class="METADATA DEBUG">' + responseData[i].username + '</td>';

        trHTML += '<td class="METADATA DEBUG">' + responseData[i].totalProfits + '</td>';

        trHTML += '</tr>';	
		      
    }

    $('#activity-display-table  > tbody').html(trHTML); 

    

    console.log("trHTML", trHTML);

}

function clearFormBoxes(){
$("#category").val(newValue);
    setcategory("");

    setRemoteServerIP("");
	$("#description").val(newValue);
    setRemoteServerPort(""); 
    	$("#state").val(newValue);
}


function showResultsArea() {
	$("#results-area-parent-div").show();


}

function hideResultsArea() {

	$("#results-area-parent-div").hide();

}




function processForm() {

	//console.debug(" -> :: processForm()");	

	//

	activityCategory=$("#category").val();

	console.debug("activityCategory: " + activityCategory);

	//
	
    activityState=$("#state").val();

	console.debug("activityState: " + activityState);

	//
	
    activityDescription=$("#description").val();

	console.debug("activityDescription: " + activityDescription);

	//
	
	$.ajax({

		type: "POST",
		
		url: "https://api.softwareshinobi.online/activity-manager/add-activity",

        data: JSON.stringify({
        
            category: activityCategory,

            state: activityState,

            description: activityDescription,
			
            jewellerId: "asdfas", locale: "adfa"
              
        }),

		contentType: "text/plain",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {

            //console.log("everything went good.");
                        
			//console.log("data");

            //console.log(data);
            
           // setResultsArea(data);
            
           // showResultsArea();
		     clearFormBoxes();
displayAllActivityRecords();		 

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");

			console.log("exception");
			
			console.log(jqXHR);

			console.log("status");
			
			console.log(status);

		}

	});

	//

	//console.debug(" <- :: processForm()");
  
}
