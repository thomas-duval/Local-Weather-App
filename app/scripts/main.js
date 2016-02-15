if (navigator.geolocation) {
    var lat = 35;
    var lon = 139;
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        var owpApi = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=d0256561cef041c12aa806862c96034c';
        $("#description").html(owpApi);
        $.getJSON(owpApi, function (json) {
            $("#json").html(JSON.stringify(json));
            $("#temperature").html(json.main.temp);
            $("#city").html(json.name);
            $("#description").html(json.weather[0].description);
            $("#wind").html(json.wind.speed);
        });
    });



}
