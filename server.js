import express from 'express'
const app = express()
import mongoose from 'mongoose'
import keys from './config/keys'

mongoose.Promise = global.Promise
mongoose.connect(keys.MONGO_URI)







const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Escuchando en el puerto: ${PORT}`))