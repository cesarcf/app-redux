import { Schema } from 'mongoose'


const voucherSchema = new Schema({
	type: { type: String }, //multiple | single
	code: { type: String },
	value: { type: String },
	used: { type: Boolean, default: false },
	enabled: { type: Boolean, default: true },
	created: { type: Date, default: Date.now }
})



export default voucherSchema