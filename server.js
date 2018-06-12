import express from 'express'
const app = express()
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import morgan from 'morgan'
import keys from './config/keys'
import routes from './routes'

/**
* Conexion a MongoDB con mongoose
**/
mongoose.Promise = global.Promise
mongoose.connect(keys.MONGO_URI)

/**
*
**/
app.use(morgan('dev'))

/**
*
**/
app.use(bodyParser.json())

/**
*
**/
app.use(cookieSession({
	keys: [keys.COOKIE_SECRET_KEY],
	cookie: {
		maxAge:30 * 24 * 60 * 60 * 1000 //1 mes
	}
}))

/**
* Rutas de la App
**/
routes(app)


/**
* Lanzamos la App
**/
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Escuchando en el puerto: ${PORT}`))