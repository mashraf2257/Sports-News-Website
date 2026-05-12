//  API keys and parameters
//  IMPORTANT: Add your own API keys to a .env file (see .env.example)

var wApiKey = "YOUR_WEATHER_API_KEY"; // Get from openweathermap.org
var wApiCity = "Cairo";
var wApiCountry = "EG";
var wApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${wApiCity},${wApiCountry}&appid=${wApiKey}&units=metric`;

var cApiKey = "YOUR_EXCHANGE_API_KEY"; // Get from exchangerate-api.com
var cApiUrl = `https://v6.exchangerate-api.com/v6/${cApiKey}/latest/EGP`;

var sApiKey = "YOUR_SPORTS_API_KEY"; // Get from allsportsapi.com
var sApiUrl1 = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${sApiKey}`;
var sApiUrl2 = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${sApiKey}&leagueId=152&timezone=Africa/Cairo`;
// var sApiUrl = `https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${sApiKey}`;

var nAPiKey = "YOUR_NEWS_API_KEY"; // Get from newsapi.org
var businessUrl = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${nAPiKey}`;
var entertainmentUrl = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${nAPiKey}`;
var sportsUrl = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${nAPiKey}`;
var scienceUrl = `https://newsapi.org/v2/top-headlines?category=science&apiKey=${nAPiKey}`;
var technologyUrl = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${nAPiKey}`;

// Fetch weather data

$.ajax({
  url: wApiUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    $(".page aside .weather h2 span").text(data.main.temp);
    $(".page aside .weather h3 span").text(data.name);
    var icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    $(".page aside .weather img").attr("src", icon);
    $(".page aside .weather img").attr("alt", data.weather[0].description);
    $(".page aside .weather img").attr("title", data.weather[0].description);
  },
});

// Fetch currency data

$.ajax({
  url: cApiUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    $("aside .currency section:first-of-type h3 span ").text(
      data.conversion_rates.USD,
    );
    $("aside .currency section:nth-of-type(2) h3 span ").text(
      data.conversion_rates.EUR,
    );
    $("aside .currency  section:nth-of-type(3) h3 span ").text(
      data.conversion_rates.SAR,
    );
  },
});

// Fetch live match scores

$(".btn3").hide();

function hidebtn() {
  $(".livescore").hide();
  $(".btn3").hide();
}
function wwbtn() {
  $(".btn3").show();
  $(".livescore").html("");
  $(".livescore").show();

  $.ajax({
    url: sApiUrl1,
    type: "GET",
    dataType: "json",
    success: function (data) {
      var length = data.result.length;
      for (var i = 0; i < length; i++) {
        $(".livescore").prepend(`
          <section>
          <div>
          <img src="${data.result[i].home_team_logo}" alt="" />
          <h3>${data.result[i].event_home_team}</h3>
          </div>
          <h2>${data.result[i].event_final_result}</h2>
          <div >
          <img src="${data.result[i].away_team_logo}" alt="" />
          <h3>${data.result[i].event_away_team}</h3>
          </div>
          </section>
             `);
      }
    },
  });
}
function plbtn() {
  $(".btn3").show();
  $(".livescore").html("");
  $(".livescore").show();

  $.ajax({
    url: sApiUrl2,
    type: "GET",
    dataType: "json",
    success: function (data) {
      if (Array.isArray(data.result) && data.result.length > 0) {
        // console.log(data);
        var length = data.result.length;
        for (var i = 0; i < length; i++) {
          $(".livescore").prepend(`
          <section>
          <div>
          <img src="${data.result[i].home_team_logo}" alt="" />
          <h3>${data.result[i].event_home_team}</h3>
          </div>
          <h2>${data.result[i].event_final_result}</h2>
          <div >
          <img src="${data.result[i].away_team_logo}" alt="" />
          <h3>${data.result[i].event_away_team}</h3>
          </div>
          </section>
    `);
        }
      } else {
        $("aside .livescore").html(
          "<p>There are no live matches right now</p>",
        );
        $("aside .livescore p").css({
          "font-size": "20px",
          "text-align": "center",
          "margin-top": "20px",
          "margin-bottom": "20px",
          width: "300px",
        });
        $("aside .livescore p").addClass("bungee-regular ");
      }
    },
  });
}
$(".btn1").click(wwbtn);
$(".btn2").click(plbtn);
$(".btn3").click(hidebtn);

// Fetch ness data

$(".page main div div section article p").addClass("jomhuria-regular");
$.ajax({
  url: businessUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    var date0 = data.articles[0].publishedAt.split("T")[0];
    var date1 = data.articles[1].publishedAt.split("T")[0];
    var date2 = data.articles[2].publishedAt.split("T")[0];
    // console.log(data);
    $(".page main .b section article:nth-of-type(1) img").attr(
      "src",
      data.articles[0].urlToImage,
    );
    $(".page main .b section article:nth-of-type(1) p").text(
      data.articles[0].title,
    );

    $(".page main .b section article:nth-of-type(1) a").attr(
      "href",
      data.articles[0].url,
    );
    $(".page main .b section article:nth-of-type(1) h3").text(date0);
    $(".page main .b section article:nth-of-type(2) img").attr(
      "src",
      data.articles[1].urlToImage,
    );
    $(".page main .b section article:nth-of-type(2) p").text(
      data.articles[1].title,
    );

    $(".page main .b  section article:nth-of-type(2) a").attr(
      "href",
      data.articles[1].url,
    );
    $(".page main .b  section article:nth-of-type(2) h3").text(date1);
    $(".page main .b  section article:nth-of-type(3) img").attr(
      "src",
      data.articles[2].urlToImage,
    );
    $(".page main .b section article:nth-of-type(3) p").text(
      data.articles[2].title,
    );

    $(".page main .b section article:nth-of-type(3) a").attr(
      "href",
      data.articles[2].url,
    );
    $(".page main .b section article:nth-of-type(3) h3").text(date2);
  },
});

$.ajax({
  url: entertainmentUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    var date0 = data.articles[0].publishedAt.split("T")[0];
    var date1 = data.articles[1].publishedAt.split("T")[0];
    var date2 = data.articles[2].publishedAt.split("T")[0];
    // console.log(data);
    $(
      ".page main > div:nth-of-type(2) div section article:nth-of-type(1) img",
    ).attr("src", data.articles[0].urlToImage);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(1) p",
    ).text(data.articles[0].title);

    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(1) a",
    ).attr("href", data.articles[0].url);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(1) h3",
    ).text(date0);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(2) img",
    ).attr("src", data.articles[1].urlToImage);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(2) p",
    ).text(data.articles[1].title);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(2) a",
    ).attr("href", data.articles[1].url);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(2) h3",
    ).text(date1);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(3) img",
    ).attr("src", data.articles[2].urlToImage);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(3) p",
    ).text(data.articles[2].title);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(3) a",
    ).attr("href", data.articles[2].url);
    $(
      ".page main div:nth-of-type(2) div section article:nth-of-type(3) h3",
    ).text(date2);
  },
});

$.ajax({
  url: sportsUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    var date0 = data.articles[0].publishedAt.split("T")[0];
    var date1 = data.articles[1].publishedAt.split("T")[0];
    var date2 = data.articles[2].publishedAt.split("T")[0];
    // console.log(data);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(1) img",
    ).attr("src", data.articles[0].urlToImage);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(1) p",
    ).text(data.articles[0].title);

    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(1) a",
    ).attr("href", data.articles[0].url);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(1) h3",
    ).text(date0);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(2) img",
    ).attr("src", data.articles[1].urlToImage);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(2) p",
    ).text(data.articles[1].title);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(2) a",
    ).attr("href", data.articles[1].url);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(2) h3",
    ).text(date1);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(3) img",
    ).attr("src", data.articles[2].urlToImage);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(3) p",
    ).text(data.articles[2].title);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(3) a",
    ).attr("href", data.articles[2].url);
    $(
      ".page main div:nth-of-type(3) div section article:nth-of-type(3) h3",
    ).text(date2);
  },
});

$.ajax({
  url: scienceUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    var date0 = data.articles[0].publishedAt.split("T")[0];
    var date1 = data.articles[1].publishedAt.split("T")[0];
    var date2 = data.articles[2].publishedAt.split("T")[0];
    // console.log(data);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(1) img",
    ).attr("src", data.articles[0].urlToImage);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(1) p",
    ).text(data.articles[0].title);

    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(1) a",
    ).attr("href", data.articles[0].url);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(1) h3",
    ).text(date0);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(2) img",
    ).attr("src", data.articles[1].urlToImage);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(2) p",
    ).text(data.articles[1].title);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(2) a",
    ).attr("href", data.articles[1].url);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(2) h3",
    ).text(date1);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(3) img",
    ).attr("src", data.articles[2].urlToImage);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(3) p",
    ).text(data.articles[2].title);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(3) a",
    ).attr("href", data.articles[2].url);
    $(
      ".page main div:nth-of-type(4) div section article:nth-of-type(3) h3",
    ).text(date2);
  },
});

$.ajax({
  url: technologyUrl,
  type: "GET",
  dataType: "json",
  success: function (data) {
    var date0 = data.articles[0].publishedAt.split("T")[0];
    var date1 = data.articles[1].publishedAt.split("T")[0];
    var date2 = data.articles[2].publishedAt.split("T")[0];
    // console.log(data);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(1) img",
    ).attr("src", data.articles[0].urlToImage);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(1) p",
    ).text(data.articles[0].title);

    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(1) a",
    ).attr("href", data.articles[0].url);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(1) h3",
    ).text(date0);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(2) img",
    ).attr("src", data.articles[1].urlToImage);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(2) p",
    ).text(data.articles[1].title);

    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(2) a",
    ).attr("href", data.articles[1].url);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(2) h3",
    ).text(date1);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(3) img",
    ).attr("src", data.articles[2].urlToImage);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(3) p",
    ).text(data.articles[2].title);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(3) a",
    ).attr("href", data.articles[2].url);
    $(
      ".page main div:nth-of-type(5) div section article:nth-of-type(3) h3",
    ).text(date2);
  },
});
