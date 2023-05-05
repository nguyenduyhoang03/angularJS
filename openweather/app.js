//call api form sever
$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&id=524901&APPID=710a8a155ade8daf23d7240bf1ca4d6f&units=metric",
function(api){
    console.log(api);
    console.log("local temp: " +api.main.temp);
    console.log("description: "+api.weather[0].description);
    console.log("wind speed: " +api.wind.speed);
    $('.temp').html("Local Temp: " +api.main.temp);
    $('.icon img').attr('src','https://openweathermap.org/img/wn/'+api.weather[0].icon+ '.png');
    $('.feel-like').html('feel like: '+ api.main.feels_like);
    $('.lat').html('lat: '+api.coord.lat)
    $('.min').html('temp min: '+api.main.temp_min)
    $('.max').html('temp max: '+api.main.temp_max)
});

// cau truc chuan $.get("api url",function(){})