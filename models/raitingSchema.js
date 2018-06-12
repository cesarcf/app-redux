import { Schema } from 'mongoose'


const raitingSchema = new Schema({
	score: { type: Number },
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	created: { type: Date, default: Date.now },
	updated: { type: Date }
})


export default raitingSchema