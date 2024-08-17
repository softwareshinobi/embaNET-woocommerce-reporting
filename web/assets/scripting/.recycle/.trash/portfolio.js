
$(document).ready(function () {

    visualizeTraderDetails();

    setInterval(visualizeTraderDetails, 1000 * 8);

});



function visualizeTraderDetails() {

    console.debug(" -> :: visualizeTraderDetails()");

    $.ajax({

        type: "GET",

        url: apiURL + "/trader/" + traderName(),

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            insertTraderHoldings(data);

        },

        error: function (exception, status) {

            console.error("error fetching trader details / ", exception);

        }

    });

}

function insertTraderHoldings(holdings) {

  console.debug(" -> :: insertTraderHoldings()");

  var html = '';
  var totalUnits = 0;
  var totalValue = 0;

  for (var i = 0; i < holdings.securityPortfolio.length; i++) {

    html += '<tr>';

    html += '<td>' + holdings.securityPortfolio[i].symbol.toUpperCase() + '</td>';

    html += '<td>' + holdings.securityPortfolio[i].units.toLocaleString() + '</td>';

    html += '<td>$ ' + holdings.securityPortfolio[i].costBasis.toLocaleString() + '</td>';  // Format cost basis with 2 decimals and USD symbol

    var value = holdings.securityPortfolio[i].units * holdings.securityPortfolio[i].costBasis.toLocaleString();

    html += '<td>$ ' + value.toLocaleString() + '</td>';  // Format value with 2 decimals and USD symbol

    totalUnits += holdings.securityPortfolio[i].units;

    totalValue += value;

html += '<td> -- </td>';

    html += '</tr>';

  }

  // Add sum row with formatting
  html += '<tr style="font-weight: bold;">';
  html += '<td>TOTAL</td>';  // Bold "Total" text
  html += '<td>' + totalUnits.toLocaleString() + '</td>';  // Format units with comma separator

html += '<td> -- </td>';



html += '<td>$ ' + totalValue.toLocaleString() + '</td>';

html += '<td>$ ' + holdings.portfolioValue.toLocaleString() + '</td>';

  html += '</tr>';

//  console.long("html / ", html);

  $('#securityPortfolio > tbody').html("");

  $('#securityPortfolio > tbody').html(html);

}

