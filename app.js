const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.port || 8080

app.listen(PORT)
