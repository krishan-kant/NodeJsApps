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

    const url="http://localhost:3000/weather?search="+encodeURIComponent(location)
    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error){
                message_1.textContent = "Location not found"
            }
            else{
                //var locat = "City:"
                //locat.concat(data.location.name,"\nRegion:",data.location.region,"\nCountry:",data.location.country)
                const l1=data.location.name
                const l2=data.location.region
                const l3=data.location.country
                const l4=l1+" "+l2+" "+l3
                message_1.textContent=l4
                const w1=data.current.weather_descriptions[0]
                const w2=data.current.temperature
                const w3=data.current.humidity
                const w4=w1+" Temperature "+w2+"C Humidity "+w3
                message_2.textContent=w4
                //const address = data.location.name+" "+data.location.region+" "+data.location.country
                //console.log(address)
                // console.log({
                //     Weather_details: data.current.weather_descriptions[0],
                //     current: data.current.temperature,
                //     Humidity: data.current.humidity
                // })
            }
        })
    })
    console.log('Testing')
})