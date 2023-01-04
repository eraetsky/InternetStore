require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api',router)
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`Server has been started on port ${port}`))
    }
    catch(e) {
        console.log(e)
    }
}
start()
