import express from 'express'
const app = express()
import mongoose from 'mongoose'
import keys from './config/keys'
import routes from './routes'

mongoose.Promise = global.Promise
mongoose.connect(keys.MONGO_URI)


routes(app)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Escuchando en el puerto: ${PORT}`))