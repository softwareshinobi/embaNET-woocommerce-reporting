
$(document).ready(function () {

  // alert("limitorder.js");

});

function processBuyForm() {

//

	buyOrderSymbol=$("#buyOrderSymbol").val();

	console.debug("buyOrderSymbol / " + buyOrderSymbol);

//



    if(buyOrderSymbol===""){

        console.log("symbol blank. try again.");
//eturn;

    }else{

        console.log("good");

    }

    buyOrderUnits=$("#buyOrderUnits").val();

	console.debug("buyOrderUnits / " + buyOrderUnits);

//

    strike=$("#strike").val();

	console.debug("strike / " + strike);

//

	$.ajax({

		type: "POST",
		
		url: apiURL + "/broker/buy/stop",

        data: JSON.stringify({
        
            trader: traderName(),
            
            ticker: buyOrderSymbol,

            units: buyOrderUnits,

            strike: strike
       
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

