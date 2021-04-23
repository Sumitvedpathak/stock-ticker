const express = require('express')
const Constants = require('./constants')

const app = express()

app.listen(Constants.PORT, () => {
    console.log('Listening to port - ' + Constants.PORT)
})