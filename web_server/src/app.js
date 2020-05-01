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

app.get('/weather',(req,res) => {
    res.send('Weather is fine, but are you?')
})

app.listen(3000,() => {
    console.log('Server is up on port 3000')
})