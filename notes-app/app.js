const fs = require('fs')
fs.writeFileSync('notes.txt','This File was created by nodejs.')
fs.appendFileSync('notes.txt',' Testing append function of fs(file system)')