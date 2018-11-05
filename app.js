document.addEventListener('DOMContentLoaded',function(){ // DOM used for when the HTML script has been completely loaded and does not need to wait for things such as images, making it faster and more appropriate in this case

     
    document.getElementById('GO').onclick=function(){
        var name= document.getElementById("City").value; // Connects to ID in HTML 
      var api='https://openweathermap.org/data/2.5/find?q='; // Activates and connects API link 
      var city= name; // Creates variable called city to represent the "City" ID in HTML 
      var units = '&units=metric'; // Uses Metric Units (Celsius) 
      var apikey ='&appid=b6907d289e10d714a6e88b30761fae22'; // Activates and connects API Key 
        var url= api+city+units+apikey; // The URL link for the API is the combination of these 4 variables: https://openweathermap.org/data/2.5/find?q=London&units=metric&appid=b6907d289e10d714a6e88b30761fae22 
        var req = new XMLHttpRequest(); // Used to exchange data between the server and the website 
        req.open("GET",url,true); // Open() Re/Initializes a newley made request. GET used as HTTP method. If True, Notification is sent through Event Listener 
        req.send(); // Sends request to server 
        req.onload=function(){ // Onload is used as the success of the transaction 
        var json=JSON.parse(req.responseText); // Parse makes the data a JS object. Response Text returns text ercieved from the server 
        var celsius = Math.floor(json.list[0].main.temp - 273.15);
        var min_temp=Math.floor(json.list[0].main.temp_min - 273.15);
        var max_temp=Math.floor(json.list[0].main.temp_max - 273.15); // These three convert the Kelvin temperatures recieved into Celsius by subtracting 273.15. This ALSO ensures the array values start from 0 
        var x=json.list[0].weather[0].main;
        
        document.getElementsByClassName('status')[0].innerHTML=x; // Connects to the "Status" class in HTML and equates it to the resultant code above, x. Thus this produces the status term for the weather (ex. Mist) 
        document.getElementsByClassName('Statistics')[0].innerHTML="The Temp of "+ name +" is: " + celsius + "&degC"
        + "<br>The Min Temp is :  " + min_temp + "&degC" + "<br>The Max Temp is :  " + max_temp +"&degC<br>" + "The Humidity in Weather is: " + json.list[0].main.humidity;   
      }; // Produces the detailed results retrieved from the API 
    };
  });