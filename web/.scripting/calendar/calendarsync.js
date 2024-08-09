$(document).ready(function () {

    setTimeout(getCalendarDetailsFromServer, 1000 * 0);

//    resetServerCalendarDetails();

    setInterval(saveCalendarDetailsToServer, 1000 * 10);

});

function getCalendarDetailsFromServer() {

	console.debug("enter -> getCalendarDetailsFromServer");

	$.ajax({

		type: "GET",

		url: apiURLBase + "/calendar",

		crossDomain: true,

		dataType: "text",

		success: function (response, status, jqXHR) {

            var calendarData = JSON.parse(response);

    console.log("calendarData",calendarData);    

            $(calendarData).each(function(index, element) {

                console.log("element / " + index + " / " + element.title);

                valorantCalendar.addEvent({

                    title: element.title,

                    start: element.start,

                    end: element.end,
    
                    backgroundColor: element.backgroundColor,

                });

            });

		},

		error: function (exception, status) {

			console.log("error issuing request");

			console.log("status / " + status);

			console.log("exception / " + exception);

		}

	});

}

function saveCalendarDetailsToServer() {

	console.debug("enter -> saveCalendarDetailsToServer");

//////////////////////////////////////////

    console.log("valorantCalendar",valorantCalendar);    

    valorantCalendarEvents = valorantCalendar.getEvents()

    console.log("valorantCalendarEvents",valorantCalendarEvents);    

//////////////////////////////////////////

    valorantCalendarEventsJSON = JSON.stringify(valorantCalendarEvents);

    console.log("proper json / ",valorantCalendarEventsJSON);    

//////////////////////////////////////////

	payload = JSON.stringify({

        intention: valorantCalendarEventsJSON,        

	});

//////////////////////////////////////////

	$.ajax({

		type: "POST",

		url: apiURLBase + "/calendar",

		data: payload,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (response, status, jqXHR) {

            console.log("response / " + response);

//            alert(response);

		},

		error: function (exception, status) {

			console.log("error issuing request");

			console.log("status / " + status);

			console.log("exception / " + exception);

		}

	});

}

//////////////////////////////////////////

function resetServerCalendarDetails() {

	payload = JSON.stringify({

        intention: "",        

	});

	$.ajax({

		type: "POST",

		url: apiURLBase + "/calendar",

		data: payload,

		contentType: "application/json; charset=utf-8",

		crossDomain: true,

		dataType: "text",

		success: function (response, status, jqXHR) {

            console.log("response / " + response);

            getUniverseIntention();

		},

		error: function (exception, status) {

			console.log("error issuing request");

			console.log("status / " + status);

			console.log("exception / " + exception);

		}

	});

}
