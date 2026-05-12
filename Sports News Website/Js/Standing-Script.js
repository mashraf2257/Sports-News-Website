let premiumLeagueApiUrl = `https://www.chelseafc.com/en/api/fixtures/league-table?entryId=30EGwHPO9uwBCc75RQY6kg`;
let proxy = "https://corsproxy.io/?";
let url = proxy + premiumLeagueApiUrl + "&_=" + Date.now();
let parent = document.getElementById("parent");

$.ajax({
  url: url,
  method: "GET",
  success: function (data) {
    leagueTable(data);
  },
});

function leagueTable(data) {
  data.items[0].standings.tables[0].rows.forEach((team) => {
    let teamsDiv = document.createElement("div");
    teamsDiv.className = "teamrow";
    Teaminfo(team, teamsDiv);
    stats(team, teamsDiv);
    recentform(team, teamsDiv);
    parent.append(teamsDiv);
  });
}

function Teaminfo(team, teamsDiv) {
  let section = `<section class="section1">
    <span>${team.position}</span>
    <img src="${team.crestUrl}">
    <p>${team.clubShortName}</p>
    </section>`;
  if (team.position <= 4) teamsDiv.classList.add("top4");
  else if (team.position > 17) teamsDiv.classList.add("last3");
  else if (team.position === 5) teamsDiv.classList.add("nth5");
  else if (team.position === 6) teamsDiv.classList.add("nth6");

  teamsDiv.innerHTML += section;
}

function stats(team, teamsDiv) {
  let section = `
  <section class="section2">
    <p>${team.played}</p>
    <p>${team.won}</p>
    <p>${team.drawn}</p>
    <p>${team.lost}</p>
    <p>${team.goalsFor} : ${team.goalsAgainst}</p>
    <p>${team.goalDifference}</p>
    <p class="points">${team.points}</p>
  </section>`;
  teamsDiv.innerHTML += section;
}

function recentform(team, teamsDiv) {
  let recentform = "";
  team.recentForm.forEach((item) => {
    recentform += `<span class="${item}"></span>`;
  });
  let section = `
  <section class="section3">
    <div class="recentcoll">
    ${recentform}
    </div>
  </section>`;

  teamsDiv.innerHTML += section;
}
