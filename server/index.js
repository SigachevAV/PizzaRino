require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')
const models= require('./models/models')
const router = require('./routes/index')
app.use(cors())
app.use(express.json())
app.use('/api', router)
//app.get('/', (req, res) => (res.status(200).json({messege: 'it just works'})))
const Start = async () =>
{
    try
    {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=>console.log('Server started on port ', PORT))
    }
    catch(exeption)
    {
        console.log(exeption)
    }
}
Start()