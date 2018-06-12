import express from 'express'
const app = express.Router()

app.get('/login', (req, res) => {
	res.json({ auth: 'auth/login' })
})


export default app