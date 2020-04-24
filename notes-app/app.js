const validator = require('validator')
const chalk = require('chalk')


const log= console.log

log(chalk.green.inverse('Hara rang hai ye'))

const getNotes=require('./notes.js')

const message=getNotes()

console.log(message)

//console.log(validator.isEmail('krish.kant.47@gmail.com'))
console.log(validator.isURL('www.google.com'))