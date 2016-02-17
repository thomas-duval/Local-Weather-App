/* global $ */
function owpFunction(unit) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var owpApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + unit + '&appid=d0256561cef041c12aa806862c96034c';
            // $("#description").html(owpApiUrl);
            $.getJSON(owpApiUrl, function (json) {
                $("#temperature").html(json.main.temp);
                $("#city").html(json.name);
                $("#description").html(json.weather[0].description);
                $("#wind").html(json.wind.speed);
                var icon = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
                $("#icon").attr("src", icon)
            });
        });

    }
};

$("#getWeather").click(function () {
    var unit = 'metric';
    owpFunction(unit);
});

$("#fUnit").click(function () {
    var unit = 'imperial';
    owpFunction(unit);
    $("#temperatureUnit").html(" °F")
    $("#windUnit").html(" miles/hour")
});
$("#cUnit").click(function () {
    var unit = 'metric';
    owpFunction(unit);
    $("#temperatureUnit").html(" °C")
    $("#windUnit").html(" meter/sec")
});