
$(document).ready(function () {

    paintOrderMetrics();

    setInterval(paintOrderMetrics, 1000 * 10);

});

function paintOrderMetrics() {

    displayOrdersTotalRevenue();
    
    displayOrdersAverageRevenue();

    displayOrderCount();
    
    displayCustomerCount();
    
}

function displayOrdersTotalRevenue() {

    console.debug(" -> :: displayOrdersTotalRevenue()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/revenue/total",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            var totalRevenue = data.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            
            console.warn("totalRevenue / ", totalRevenue);
            
            $('#revenueTotal').html(totalRevenue);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}

function displayOrdersAverageRevenue() {

    console.debug(" -> :: displayOrdersAverageRevenue()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/revenue/average",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {

            var averageRevenue = data.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            
            console.warn("averageRevenue / ", averageRevenue);
            
            $('#revenueAverage').html(averageRevenue);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}


function displayCustomerCount() {

    console.debug(" -> :: displayCustomerCount()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/count/customers",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {
            
            console.warn("orderCount / ", data);
            
            $('#customerCount').html(data);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}
function displayOrderCount() {

    console.debug(" -> :: displayOrderCount()");

    $.ajax({

        type: "GET",

        url: apiURL + "/orders/count",

        contentType: "text/plain",

        crossDomain: true,

        success: function (data, status, jqXHR) {
            
            console.warn("orderCount / ", data);
            
            $('#orderCount').html(data);

        },

        error: function (exception, status) {

            console.error("error getting order details / ", exception);

        }

    });

}
