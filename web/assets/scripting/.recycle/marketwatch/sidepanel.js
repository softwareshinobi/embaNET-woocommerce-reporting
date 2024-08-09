
const formatter = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 1,      
   maximumFractionDigits: 1,
});

//console.log(); // "2.01"
   // $("#traderAccountUsage").html(formatter.format(100*trader.utilizationPercentage)+"%");


$(document).ready(function () {

	setInterval(updateCallistoPanel, 1000);

	setInterval(updateDionePanel, 1000);

	setInterval(updatePandoraPanel, 1000);

	setInterval(updateEuropaPanel, 1000);

});

// Callisto Things //

function onClickCallistoPanel() {

    console.log(" onclick / CALLISTO");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="CALLISTO";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updateCallistoPanel() {

	$.ajax({

		type: "GET",

		url: apiURL + "/security/last/callisto",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            var amountGain = responsePayloadParsed.gainValue;

            var gainPercent = responsePayloadParsed.gainPercent;

            var gainPercentString = amountGain.toFixed(2)+" / " + (100*gainPercent).toFixed(2)+"%";

            if (gainPercent >= 0) {

            gainPercentString = "+" + gainPercentString;

            }

            $("#panel-callisto-pricing").text(responsePayloadParsed.price);

            $("#panel-callisto-change").text(gainPercentString);

		},

		error: function (exception, status) {

			console.log("error / ", exception);

		}

	});
  
}

// Dione Things // 

function onClickDionePanel() {

    console.log(" onclick / DIONE");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="DIONE";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updateDionePanel() {

	$.ajax({

		type: "GET",

		url: apiURL + "/security/last/dione",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            var amountGain = responsePayloadParsed.gainValue;

            var gainPercent = responsePayloadParsed.gainPercent;

            var gainPercentString = amountGain.toFixed(2)+" / " + (100*gainPercent).toFixed(2)+"%";

            if (gainPercent >= 0) {

            gainPercentString = "+" + gainPercentString;

            }

            $("#panel-dione-pricing").text(responsePayloadParsed.price);

            $("#panel-dione-change").text(gainPercentString);

		},

		error: function (exception, status) {

			console.log("error / ", exception);

		}

	});

}

// Europa Things //

function onClickEuropaPanel() {

    console.log(" onclick / EUROPA!");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="EUROPA";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updateEuropaPanel() {

	$.ajax({

		type: "GET",

		url: apiURL + "/security/last/europa",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            var amountGain = responsePayloadParsed.gainValue;

            var gainPercent = responsePayloadParsed.gainPercent;

            var gainPercentString = amountGain.toFixed(2)+" / " + (100*gainPercent).toFixed(2)+"%";

            if (gainPercent >= 0) {

            gainPercentString = "+" + gainPercentString;

            }

            $("#panel-europa-pricing").text(responsePayloadParsed.price);

            $("#panel-europa-change").text(gainPercentString);

		},

		error: function (exception, status) {

			console.log("error / ", exception);

		}

	});

}

// Pandora Things //

function onClickPandoraPanel() {

    console.log(" onclick / PANDORA!");

    console.log("apiSymbol / before / " + apiSymbol);

    apiSymbol="PANDORA";

    console.log("apiSymbol / after  / " + apiSymbol);

}

function updatePandoraPanel() {

	$.ajax({

		type: "GET",

		url: apiURL + "/security/last/pandora",

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (responsePayload, status, jqXHR) {

			var responsePayloadParsed  = JSON.parse(responsePayload);

            var amountGain = responsePayloadParsed.gainValue;

            var gainPercent = responsePayloadParsed.gainPercent;

            var gainPercentString = amountGain.toFixed(2)+" / " + (100*gainPercent).toFixed(2)+"%";

            if (gainPercent >= 0) {

            gainPercentString = "+" + gainPercentString;

            }

            $("#panel-pandora-pricing").text(responsePayloadParsed.price);

            $("#panel-pandora-change").text(gainPercentString);

		},

		error: function (exception, status) {

			console.log("error / ", exception);

		}

	});

}
