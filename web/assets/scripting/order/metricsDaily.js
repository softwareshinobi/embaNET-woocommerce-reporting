
$(document).ready(function () {

    paintDailyOrderMetrics();

    setInterval(paintDailyOrderMetrics, 1000 * 10);

});

function paintDailyOrderMetrics() {

    displayDailyOrdersTotalRevenue();
    
    displayDailyOrdersAverageRevenue();

    displayDailyOrderCount();
    
    displayDailyCustomerCount();
    
}

function displayDailyOrdersTotalRevenue() {

    console.debug(" -> :: displayOrdersTotalRevenue()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/daily/revenue/total",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            var totalRevenue = data.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            
            console.warn("totalRevenue / ", totalRevenue);
            
            $('#dailyRevenueTotal').html(totalRevenue);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}

function displayDailyOrdersAverageRevenue() {

    console.debug(" -> :: displayOrdersAverageRevenue()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/daily/revenue/average",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            var averageRevenue = data.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            
            console.warn("averageRevenue / ", averageRevenue);
            
            $('#dailyRevenueAverage').html(averageRevenue);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}


function displayDailyCustomerCount() {

    console.debug(" -> :: displayCustomerCount()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/daily/count/customers",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {
            
            console.warn("dailyCustomerCount / ", data);
            
            $('#dailyCustomerCount').html(data);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}
function displayDailyOrderCount() {

    console.debug(" -> :: displayOrderCount()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/daily/count",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {
            
            console.warn("orderCount / ", data);
            
            $('#dailyOrderCount').html(data);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}
