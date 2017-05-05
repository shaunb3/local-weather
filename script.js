$(document).ready(function(){
  
	//var api = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&APPID=6d6372d13d15023116abba87673faa0b' ;
	
	var api;
	var location;
	var lat;
	var long;
	var tempC;
	var tempF;
	var tempSwap =true;
	


	$.getJSON("http://ipinfo.io", function(ipInfo) {
   	
   		console.log(ipInfo);


   		location =ipInfo.loc.split(",");
  		
  		lat =location[0];
  		long =location[1];
		api = 'http://api.openweathermap.org/data/2.5/weather?'+ 'lat='+lat+'&'+'lon='+long+'&units=metric&APPID=6d6372d13d15023116abba87673faa0b' ;
  

  		$.getJSON(api,function(data){
			var iconID = data.weather[0]["id"];
			tempC =data.main.temp;
			tempF =tempC * (9/5) + 32;

			$(".description").html(data.weather[0].description);
			$(".temp").html(data.main.temp+ " C");
			console.log(data.weather[0]["id"]);
			$("#icon").addClass('wi-owm-'+ iconID);
			$(".location").html(ipInfo.city);

			console.log(tempF)


			$(".btn").on("click", function(){
				
				if(tempSwap===false) 
				{
					$(".temp").html(tempF+ " F");
					tempSwap=true;
				}

				else
				{
					$(".temp").html(tempC + " C");
					tempSwap=false;
				}
			});	
				
		});
	});





		
  

});






