
const http = require('http');

var apiKey='';//Insert your API key in the single quotes to run the script successfully

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



