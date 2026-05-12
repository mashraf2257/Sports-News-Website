var subUrl = "https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=";
var parentElement = document.getElementById("matches-container");

document.getElementById("match-date").addEventListener("change", function () {
  
  var selectedDate = this.value;
  console.log(selectedDate);
if (!selectedDate) {
   var today= new Date().tod.toISOString().split("T")[0];
   this.value = today;
}
  var url = subUrl + selectedDate + "&l=English_Premier_League";

  parentElement.innerHTML = "";

  $.ajax({
    url: url,
    method: "GET",

    success: function (data) {
      if (!data.events) {
        parentElement.innerHTML = "<p id='no-matches'>No matches found for this date.</p>";
        return;
      }

      var matches = data.events;

      matches.forEach(function (match) {
        var matchCard = `
          <div class="match_card">
            <div class="match-info">
              <div class="teams">
                <span class="match-home-team">
                  ${match.strHomeTeam}
                  <img src="${match.strHomeTeamBadge}" alt="Home Team Badge" />
                </span>

                <span class="vs">VS</span>

                <span class="match-away-team">
                  ${match.strAwayTeam}
                  <img src="${match.strAwayTeamBadge}" alt="Away Team Badge" />
                </span>
              </div>

              <p class="match-score">Score: ${match.intHomeScore} - ${match.intAwayScore}</p>
              <p class="match-date">Date: ${match.dateEvent}</p>
              <p class="match-time">Time: ${match.strTime}</p>
              <p class="match-venue">Venue: ${match.strVenue}</p>
              <p class="match-status">Status: ${match.strStatus}</p>
            </div>
          </div>
        `;

        parentElement.innerHTML += matchCard;
      });
    },

    error: function (error) {
      console.log("Error:", error);
    }
  });
});
