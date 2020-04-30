const express = require('express')

const app=express()

app.get('',(req,res) => {
    res.send('Hello, Elliot!')
})

app.get('/help',(req,res) => {
    res.send('Help? why you need help?')
})

app.get('/about',(req,res) => {
    res.send('Nothing you should know about me')
})

app.get('/weather',(req,res) => {
    res.send('Weather is fine, but are you?')
})

app.listen(3000,() => {
    console.log('Server is up on port 3000')
})