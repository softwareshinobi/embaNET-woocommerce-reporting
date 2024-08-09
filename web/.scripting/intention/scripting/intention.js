$(document).ready(function () {

    clearIntention();

    fetchIntention();

    setInterval(fetchIntention, 8000);

});

function clearIntention() {

    console.debug("enter > fetchIntention");

    $("#newIntention").val("");

}

function fetchIntention() {

    console.debug("enter > fetchIntention");

    $.ajax({

        type: "GET",

        url: apiURL + "",

        crossDomain: true,

        dataType: "text",

        success: function (response, status, jqXHR) {

            //console.log("response / " + response);

            var intention = response;

            $("#intention").text(intention);

            $("#currentIntention").val(intention);

        },

        error: function (exception, status) {

            console.error("error fetching intention / " + exception);

        }

    });

}

function setIntention() {

    console.debug("enter > setIntention");

    intention = $("#newIntention").val();

    console.log("new / intention / " + intention);

    // alert("new / intention / " + intention);

//////////////////////////////////////////

    payload = JSON.stringify({

        intention: intention,

    });

    //alert("payload / ", payload);

//////////////////////////////////////////

    $.ajax({

        type: "POST",

        url: apiURL + "",

        data: payload,

        contentType: "application/json; charset=utf-8",

        crossDomain: true,

        dataType: "text",

        success: function (response, status, jqXHR) {

            console.log("response / " + response);

            fetchIntention();

        },

        error: function (exception, status) {

            console.log("error setting intention / ", exception);

        }

    });

    clearIntention();

}
