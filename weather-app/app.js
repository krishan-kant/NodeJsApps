// key 89d934ceac10b44ff02ba21b28ee3901

//http://api.weatherstack.com/current?access_key=89d934ceac10b44ff02ba21b28ee3901&query=kolkata

const request = require('request')

const url="http://api.weatherstack.com/current?access_key=89d934ceac10b44ff02ba21b28ee3901&query=kolkata"

request(url, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})

// console.log("Starting...")

// setTimeout(() => {
//     console.log("2 second timeout")
// },2000)

// setTimeout(() => {
//     console.log("0 second Timeout")
// },0)


// console.log("...Stopping")