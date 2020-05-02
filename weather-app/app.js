// key 89d934ceac10b44ff02ba21b28ee3901
//http://api.weatherstack.com/current?access_key=89d934ceac10b44ff02ba21b28ee3901&query=kolkata

const request = require('request')
const city=process.argv[2]
const url="http://api.weatherstack.com/current?access_key=89d934ceac10b44ff02ba21b28ee3901&query="+encodeURIComponent(city)

request((url), (error,response) => {
    if(error){
        console.log("No result found, check your connectivity and enter valid location")
    }
    else{
        const data = JSON.parse(response.body)  
        if(data.error){
            console.log("Location not found")
        }
        else{
            console.log("City:",data.location.name,"\nRegion:",data.location.region,"\nCountry:",data.location.country)
            console.log(data.current.weather_descriptions[0],"\nThe current temperature is",data.current.temperature,"C\nHumidity is",data.current.humidity)
        }
    }
})