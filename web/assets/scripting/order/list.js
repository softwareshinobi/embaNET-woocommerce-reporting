
$(document).ready(function () {

    visualizeTraderOpenOrders();

    setInterval(visualizeTraderOpenOrders, 1000 * 8);

});

function visualizeTraderOpenOrders() {

    console.debug(" -> :: visualizeTraderOpenOrders()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            console.debug("data / " + data);

            populateOrderDetailSections(data);

        },

        error: function (jqXHR, status) {

            console.log("Something Went wrong");

            console.log(jqXHR);

        }

    });

    console.debug(" <- :: visualizeTraderOpenOrders()");

}

function populateOrderDetailSections(openOrderList) {

console.log("list",openOrderList);

    var html = '';

    for (var i = openOrderList.length - 1; i >= 0; i--) {

        html += '<tr>';

html += '<td class="">' + openOrderList[i].id + '</td>';  // Integer (order ID)
html += '<td class="">' + openOrderList[i].billing_email + '</td>';  // String (stock symbol)
html += '<td class="">' + openOrderList[i].date + '</td>';  // String (order type)


      var averageRevenue = openOrderList[i].total_amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            
html += '<td class="">' + averageRevenue + '</td>';  // Number (shares) with commas

        html += '</tr>';

    }

    $('#orders > tbody').html(html);

    console.log("html", html);

}

//function populateSidebarAccountDetails() {
//
//   visualizeTraderOpenOrders();
//
//   alert("asdf");
//
//  visualizeTraderDetails();
//
//}
//
//function visualizeTraderDetails() {
//    console.error("dddd");
//    console.debug(" -> :: visualizeTraderDetails()");
//    alert("worsssk");
//
//    $.ajax({
//
//        type: "GET",
//
//        url: apiURL + "/trader/" + traderName(),
//
//        contentType: "text/plain",
//
//        crossDomain: true,
//
//        success: function (data, status, jqXHR) {
//
//            insertTraderDetail(data);
//
//            insertTraderHoldings(data);
//            alert("worsssk");
//
//            //      insertTraderOrders(data);
//
//        },
//
//        error: function (exception, status) {
//
//            alert("huh?");
//
//            console.error("error fetting trader details / ", exception);
//
//        }
//
//    });
//
//}

//function insertTraderDetail(openOrderList) {
//
//    var html = '';
//
//    html += '<tr>';
//
//    html += '<td class="">' + openOrderList.username + '</td>';
//
//    html += '<td class="">' + openOrderList.accountBalance + '</td>';
//
//    html += '<td class="">' + openOrderList.totalProfits + '</td>';
//
//    html += '</tr>';
//
//    $('#profile1 > tbody').html(html);
//
//    console.log("html", html);
//
//}
//
//function insertTraderHoldings(openOrderList) {
//
//    alert("hello");
//
//    var html = '';
//
//    for (var i = 0; i < openOrderList.stocksOwned.length; i++) {
//
//        html += '<tr>';
//
//        html += '<td class="">' + openOrderList.stocksOwned[i].ticker + '</td>';
//
//        html += '<td class="">' + openOrderList.stocksOwned[i].amountOwned + '</td>';
//
//        html += '<td class="">' + openOrderList.stocksOwned[i].costBasis + '</td>';
//
//        html += '</tr>';
//
//    }
//
//    $('#holdings > tbody').html(html);
//
//    console.log("html", html);
//
//}

