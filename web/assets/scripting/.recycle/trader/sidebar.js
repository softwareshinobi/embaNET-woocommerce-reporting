$(document).ready(function () {

    fetchTraderProfile();

    setInterval(fetchTraderProfile, 1000 * 10);

});

function fetchTraderProfile() {

    console.debug(" -> :: fetchTraderProfile()");

    $.ajax({

        type: "GET",

        url: apiURL + "/trader/" + traderName(),

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            injectTraderNameAndBalance(data);

        },

        error: function (exception, status) {

            console.log("error getting trader data / ", exception);

        }

    });

    console.debug(" <- :: fetchTraderDetails()");

}

function injectTraderNameAndBalance(trader) {

    console.debug(" -> :: injectTraderNameAndBalance()");

    console.log("trader / " + trader);

    $('#sidebarTraderName').html(trader.username);

    $('#dropdownTraderName').html(trader.username);

    var formattedNumber = trader.accountValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    $('#sidebarTraderBalance').html(formattedNumber);

    console.debug(" <- :: injectTraderNameAndBalance()");

}
