
$(document).ready(function () {

//   alert("buysell.js");

 //   fetchAccountInformation();

});

function processBuyForm() {

//

	buyOrderSymbol=$("#buyOrderSymbol").val();

	console.debug("buyO33rderSymbol / " + buyOrderSymbol);

//



    if(buyOrderSymbol===""){

        console.log("try again.");
//eturn;

    }else{

        console.log("good");

    }

    buyOrderUnits=$("#buyOrderUnits").val();

	console.debug("buyOrderUnits / " + buyOrderUnits);

//

	$.ajax({

		type: "POST",
		
		url: apiURL + "/broker/buy/smart",

        data: JSON.stringify({
        
            username: traderName(),
            
            ticker: buyOrderSymbol,

            units: buyOrderUnits
       
        }),

	    contentType: "application/json",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {

            alert("order placed");

            console.log("data / ", data);
    
       //     fetchAccountInformation();

		},

		error: function (exception, status) {

            alert("error placing order");

			console.log("error buying currency / ", exception);

		}

	});

}

/*

function clearForm(){

    setFundsAddAmount(1000000);
    
}


function fetchAccountInformation() {

	console.debug(" -> :: fetchAccountInformation()");	

	$.ajax({

		type: "GET",
		
		url: "http://localhost:8888/account/"+currentTraderUsername,

		contentType: "text/plain",
		
		crossDomain: true,				

		success: function (data, status, jqXHR) {

            	$("#trader-username").val(data.username);

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");
		
			console.log(jqXHR);

		}

	});

	console.debug(" <- :: fetchTraderDetails()");	

}
*/
