const PORT = process.env.PORT || 9090
const express = require('express')

const app = express()

// App Setitngs
const config = require('./config')

// Listener
app.listen(PORT, () => console.log(`API Boilerplate at ${PORT}`))
