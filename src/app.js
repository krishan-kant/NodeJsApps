const express = require('express')
const path= require('path')
const hbs= require('hbs')

const log= console.log


//log(__dirname)
const public_path=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
//log(__filename)

const app=express()
const port = process.env.PORT || 3000

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(public_path))

app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Krishan Kant'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title: 'Help',
        name: 'Krishan Kant'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title: 'About me',
        name: 'Krishan Kant'
    })
})

const request = require('request')

app.get('/weather',(req,res) => {
    if(!req.query.search){
        return res.send({
            error: "You need to provide an address!"
        })
    }
    const city=req.query.search
    const url="http://api.weatherstack.com/current?access_key=89d934ceac10b44ff02ba21b28ee3901&query="+encodeURIComponent(city)
    request((url), (error,response) => {
        if(error){
            res.send("No result found, check your connectivity and enter valid location")
        }
        else{
            const data = JSON.parse(response.body)  
                return res.send(data)
        }
    })
})

app.get('/help/*',(req,res) => {
    res.render('notfound',{
        title: 'Error 404',
        message: 'Help page not found',
        name: 'Krishan Kant'
    })
})

app.get('*',(req,res) => {
    res.render('notfound',{
        title: 'Error 404',
        message: 'Page not found',
        name: 'Krishan Kant'
    })
})

app.listen(port,() => {
    console.log('Server is up on port '+port)
})
