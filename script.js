// $("#nav").click(a=>{
//     $('#form').show();
// })
var defaultNewsApiKey = "02210ce4ebcd4ef6b5d6a03fefdf4da8";
var defaultWeatherApiKey = "f9f2176b4299406997fe54e05c64a5c8";

$("#search").click(function () {
  var News = $("#news").val();
  var sDate = $("#sDate").val();
  console.log(News);
  console.log(sDate);
  //var eDate=$("#eDate").val();

  $.get(
    `https://newsapi.org/v2/everything?q=${News}&${sDate}&sortBy=popularity&apiKey=${defaultNewsApiKey}`,
    function (data, status) {
      console.log(data);
      renderNews(data);
    }
  );
});
$(document).ready((a) => {
  $.get(
    `https://newsapi.org/v2/everything?q=headlines&news&2024-01-01&apiKey=${defaultNewsApiKey}`,
    function (data, status) {
      console.log(data);
      renderNews(data);
    }
  );
});

$(document).ready(
  $("#home").click(function () {
    $.get(
      `https://newsapi.org/v2/everything?q=india&news&2024-01-01&apiKey=${defaultNewsApiKey}`,
      function (data, status) {
        console.log(data);
        renderNews(data);
      }
    );
  })
);

//home
$(document).ready(
  $("#home").click(function () {
    $.get(
      `https://newsapi.org/v2/everything?q=india&news&2024-01-01&apiKey=${defaultNewsApiKey}`,
      function (data, status) {
        console.log(data);
        renderNews(data);
      }
    );
  })
);

$("#sports").click(function () {
  $.get(
    `https://newsapi.org/v2/everything?q=sports&news&2024-01-02&sortBy=popularity&apiKey=${defaultNewsApiKey}`,
    function (data, status) {
      console.log(data);
      renderNews(data);
    }
  );
});
$("#business").click(function () {
  $.get(
    `https://newsapi.org/v2/everything?q=business&news&2024-01-02&sortBy=popularity&apiKey=${defaultNewsApiKey}`,
    function (data, status) {
      console.log(data);
      renderNews(data);
    }
  );
});
$("#international").click(function () {
  $.get(
    `https://newsapi.org/v2/everything?q=international&latest&news&sortBy=popularity&2024-01-02&apiKey=${defaultNewsApiKey}`,
    function (data, status) {
      console.log(data);
      renderNews(data);
    }
  );
});
$("#entertainment").click(function () {
  $.get(
    `https://newsapi.org/v2/everything?q=entertainment&india&latest&news&2024-01-03sortBy=popularity&apiKey=${defaultNewsApiKey}`,
    function (data, status) {
      console.log(data);
      renderNews(data);
    }
  );
});

function renderNews(data) {
  var newsString = "";
  data.articles.forEach((a) => {
    newsString += `
    <div class="card text-white bg-primary mb-4 mt-4" style="max-width: 10rem ; float:left;height:300px; overflow:auto;">
        <div class="card-body">
    <h4 style="font-size:15px ;color:black"><b>${a.title}</b></h4>
    <img src="${a.urlToImage}" class="card-img-top" alt="card-Image">
    <p class="card-text" style="font-size:12px">${a.description}</p>
    <div class="card-footer">${a.author}</div>
       </div>
    </div>`;
  });

  $("#card").html(newsString);
}

$(document).ready(
  $.get(
    `https://newsapi.org/v2/everything?q=indore&news&sortBy=popularity&2024-01-02&apiKey=${defaultNewsApiKey}`,
    function (data, status) {
      console.log(data);
      var localString = "";
      data.articles.forEach((a) => {
        localString += `<h4 style="font-size:12px  ;color:black"><b>${a.title}</b></h4>`;
      });
      $("#localNews").html(localString);
    }
  )
);
//weather

$(document).ready((a) => {
  $.get(
    `https://api.openweathermap.org/data/2.5/weather?q=indore&appid=${defaultWeatherApiKey}`,
    function (data, status) {
      console.log(data.weather[0].description);
      console.log(status);
      var wtrString = "";
      wtrString += `<h6 style="font-size:12px;color:black">Temp<b>${
        data.main.temp - 273
      }</b>-c</h6>
            <h6 style="font-size:12px  ;color:black">Humidity<b>${
              data.main.humidity
            }</b></h6>
            <h6 style="font-size:12px  ;color:black">Wind<b>${
              data.wind.speed
            }</b>km/h</h6>
           `;
      //   console.log(data.main.temp)
      //   $("#weather").html(data.main.temp);

      $("#weather").html(wtrString);
      var icon = data.weather[0].icon;
      var iconUrl = `https://openweathermap.org/img/wn/10d@2x.png`;
      $("#weatherIcon").attr("src", iconUrl);
    }
  );
});

// data.main.temp
// data.wind.speed
// data.sys.sunrise
// data.sys.sunset
// data.main.humidity
