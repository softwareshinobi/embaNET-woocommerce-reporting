
$(document).ready(function () {

 //   alert("simplebuysell.js");

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
		
		url: apiURL + "/broker/buy/market",

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

