console.log("Script running")


const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const message_1 = document.querySelector('#message_1')
const message_2 = document.querySelector('#message_2')


weather_form.addEventListener('submit',(e) => {
    
    e.preventDefault()
    
    const location=search.value

    message_1.textContent='Loading...'
    message_2.textContent=''

    console.log(location)

    const url="/weather?search="+encodeURIComponent(location)
    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error){
                message_1.textContent = "Location not found"
            }
            else{
                const location_output="City:"+data.location.name+"\nRegion:"+data.location.region+"\nCountry:"+data.location.country
                message_1.textContent=location_output
                const weather_output=data.current.weather_descriptions[0]+" The current temperature is "+data.current.temperature+"C, Humidity is "+data.current.humidity
                message_2.textContent=weather_output
                
            }
        })
    })
    console.log('Testing')
})
