var sApiKey = "YOUR_SPORTS_API_KEY"; // Get from allsportsapi.com
var leagueId = 152; 
var topScorersUrl = `https://apiv2.allsportsapi.com/football/?met=Topscorers&leagueId=${leagueId}&APIkey=${sApiKey}`;

var scorersContainer = $("#scorers-list");

$.ajax({
  url: topScorersUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    if (data.result && data.result.length > 0) {
      scorersContainer.empty();

      var length = Math.min(data.result.length, 15);
      
      for (var i = 0; i < length; i++) {
        var player = data.result[i];
        var rank = player.player_place || (i + 1); 

        var goals = player.goals || 0;
        var assists = player.assists || 0;
        var penalties = player.penalty_goals || 0;

        var statRow = `
          <div class="stat-row">
            <p>${rank}</p>
            <p class="player-name">${player.player_name}</p>
            <p class="team-name">${player.team_name}</p>
            <p class="goals-count">${goals}</p>
            <p>${assists}</p>
            <p>${penalties}</p>
            <p style="color: #ffb602; font-weight: bold;">-</p> <p style="color: #ea4335; font-weight: bold;">-</p> </div>
        `;

        scorersContainer.append(statRow);
      }
    } else {
      scorersContainer.html("<p style='text-align:center; padding:20px; font-size: 18px;'>No player stats available right now.</p>");
    }
  },
  error: function (error) {
    console.log("Error fetching stats:", error);
    scorersContainer.html("<p style='text-align:center; color: red;'>Failed to load stats. Please try again later.</p>");
  },
});