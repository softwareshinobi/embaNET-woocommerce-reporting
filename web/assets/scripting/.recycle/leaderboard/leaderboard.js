
$(document).ready(function () {

//    alert("overlord actual");

fetchLeaderboardDetails();

setInterval(fetchLeaderboardDetails, 1000*10);

});

function fetchLeaderboardDetails() {

console.debug(" -> :: fetchLeaderboardDetails()");	

$.ajax({

type: "GET",

url: apiURL + "/leaderboard",

contentType: "text/plain",

crossDomain: true,				

success: function (data, status, jqXHR) {

profitleaderboard(data);

},

error: function (error, status) {

    console.log("error fetching leaderboard", error);

}

});

}

function profitleaderboard(leaderBoardList) {

    var html = '';

    for (var i =0;i< leaderBoardList.length; i++) {

        html += '<tr>';

        html += '<td class="METADATA DEBUG">' + leaderBoardList[i].ranking + '</td>';  // Integer (ranking)
        html += '<td class="METADATA DEBUG">' + leaderBoardList[i].username + '</td>';  // String (username)
        html += '<td class="METADATA DEBUG">' + " $ " + leaderBoardList[i].accountNetWorth.toLocaleString() + '</td>';
        
        html += '</tr>';

    }

    $('#leaderboard > tbody').html(html); 

}
