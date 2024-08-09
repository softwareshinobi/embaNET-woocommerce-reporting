$(document).ready(function () {

    setInterval(fetchCandlestickHistory, 1000);

});

function fetchCandlestickHistory() {

    console.log("fetchCandlestickHistory / " + apiSymbol);

	$.ajax({

		type: "GET",

		url: apiURL + "/security/last/" + apiSymbol,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed = JSON.parse(responsePayload);

////

    $("#symbolTicker").text(responsePayloadParsed.security.ticker);

    $("#symbolName").text(responsePayloadParsed.security.companyName);

    $("#symbolSector").text(responsePayloadParsed.security.sector);

    $("#symbolCap").text(responsePayloadParsed.security.marketCap);


////

            var amountGain = responsePayloadParsed.gainValue;

            var gainPercent = responsePayloadParsed.gainPercent;

            var gainPercentString = amountGain.toFixed(2)+" / " + (100*gainPercent).toFixed(2)+"%";

            if (gainPercent >= 0) {

            gainPercentString = "+" + gainPercentString;
    $("#bottom-corner-symbol-diff").removeClass("text-danger");

        $("#bottom-corner-symbol-diff").addClass("text-success");

            } else {


        $("#bottom-corner-symbol-diff").addClass("text-danger");

    }
            $("#bottom-corner-symbol-diff").text(gainPercentString);

    $("#bottom-corner-symbol-pricing").text(responsePayloadParsed.price);


          //  $("#panel-callisto-pricing").text(responsePayloadParsed.price);







		}, 		error: function (exception, status) {

			console.log("error / ", exception);

		}

	});
  
}






function updateBottomCornerPricing(responsePayload) {

    console.debug(" -> :: updateBottomCornerPricing()");

    var responsePayloadParsed  = JSON.parse(responsePayload);



    var amountGain = (responsePayloadParsed.price - responsePayloadParsed.lastDayPrice).toFixed(2);

    console.debug("amountGain / "+amountGain);

    var percentageChange = ((amountGain / responsePayloadParsed.lastDayPrice) * 100).toFixed(2);

    if (percentageChange >= 0) {

        $("#bottom-corner-symbol-diff").text("+"+amountGain+" / " + "+"+percentageChange+"%");

        $("#bottom-corner-symbol-diff").removeClass("text-danger");

        $("#bottom-corner-symbol-diff").addClass("text-success");

    } else {

        $("#bottom-corner-symbol-diff").text(amountGain+" / " +percentageChange+"%");

        $("#bottom-corner-symbol-diff").addClass("text-danger");

    }


// updat stuff at the top


}
