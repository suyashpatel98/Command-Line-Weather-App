//377ddfe85bda0d0d9df020f1a7c0af79 : API key

const http = require('http');

var apiKey='377ddfe85bda0d0d9df020f1a7c0af79';

/*
http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID='+apiKey,(res)=>{
	var data_forecast = '';
	res.on('data',in_data_forecast=>{
		data_forecast=data_forecast+in_data_forecast;
	});

	res.on('end',()=>{
		var body_forecast = JSON.parse(data_forecast);
	});

	console.log(body_forecast.list[0].dt_txt);
	for(i in body_forecast.list[0].main){
		console.log(i ': 'body_forecast.list[0].main.i);
	}
	
});
*/

function printMessage(body_weather){
	console.log('----------------------------'+body_weather.name+'-----------------------------');
	for(var i in body_weather.main)
		    		console.log(i + ' : ' + body_weather.main[i]);
}

function findWeather(location){
	try{
		http.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID='+apiKey,(res)=>{
			var data_weather = '';
			res.on('data',in_data_weather=>{
				data_weather=data_weather+in_data_weather;
			});

			res.on('end',()=>{
				var body_weather = JSON.parse(data_weather);
				printMessage(body_weather);
			});	
		});
	}catch(error){
		console.log(error.message);
	}
}

const locations=process.argv.splice(2);

locations.forEach(location=>{
  findWeather(location);
});

//findWeather();

