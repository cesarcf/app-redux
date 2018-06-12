import authRouter from './auth'


export default (app) => {
	app.use('/auth', authRouter)
}