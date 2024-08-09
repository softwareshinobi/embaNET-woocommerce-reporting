
$(document).ready(function () {

    visualizeAccountBalances();

    setInterval(visualizeAccountBalances, 1000 * 10);

});

function visualizeAccountBalances() {

    console.debug(" -> :: visualizeAccountBalances()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/revenue/total",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            console.warn(data);

            injectAccountBalanceData(data);

        },

        error: function (exception, status) {

            alert("error fetching account balance data. is the backend up?");
            //    alert("eorrrrrrrrrrrrrr?");

            console.error("error fetting trader details / ", exception);

        }

    });

}

function injectAccountBalanceData(trader) {

    console.debug(" -> :: injectAccountBalanceData()");

  console.warn("trader / ", trader);

   var formattedNumberTraderAccountValue = trader.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
  console.warn("formattedNumberTraderAccountValue / ", formattedNumberTraderAccountValue);
    $('#revenueTotal').html(formattedNumberTraderAccountValue);

////////

   var formattedPortfolioValue = trader.portfolioValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    $('#traderPortfolioValue').html(formattedPortfolioValue);

////////
    
   var formattedAccountAvailable = trader.accountBalance.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    $('#traderAccountAvailable').html(formattedAccountAvailable);

//    $("#traderAccountAvailable").html(trader.accountBalance);

///////

var pct = (1.0 - trader.utilizationPercentage) * 100;


const formatter = new Intl.NumberFormat('en-US', {
   minimumFractionDigits: 1,      
   maximumFractionDigits: 1,
});

console.log(); // "2.01"
    $("#traderAccountUsage").html(formatter.format(100*trader.utilizationPercentage)+"%");

}
