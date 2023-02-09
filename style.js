function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='418a182ae18caf1ea5aa199d77c96764';
        
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
        
        + city + '&appid='+apikey+'&units=metric')
    
        
        .then(response => response.json())
        
        .then(data => {
        
        var t = data['main']['temp']
        var mt=data['main']['temp_min']
        var min=data['main']['temp_max']
        document.getElementById("output").innerHTML = t;
        document.getElementById("min").innerHTML = mt;
        document.getElementById("max").innerHTML = min;

        })  
    }