
$(document).ready(function () {

	clearFormBoxes();	

});

function clearFormBoxes(){

	$("#userName").val("");

	$("#userPassword").val("");
    
}

function processCreateForm() {

    console.debug(" -> :: processCreateForm()");	

    //

	userName=$("#userName").val();

	console.debug("userName / " + userName);

	//
	
    userPassword=$("#userPassword").val();

	console.debug("userPassword / " + userPassword);

	//
	
	$.ajax({

		type: "POST",
		
		url: apiURL + "/trader/create",

        data: JSON.stringify({
        
            username: userName,

            password: userPassword,
       
        }),

		contentType: "application/json",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {

            alert("account created: " + userName);

            console.log("response / ", data);

            window.location.replace("login.html");

		},

		error: function (exception, status) {

            alert("account NOT created");

			console.log("error creating trader / ", exception);

		}

	});
  
}
