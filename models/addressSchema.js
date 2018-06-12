import { Schema } from 'mongoose'

const addressSchema = new Schema({
	postalCode: { type: String },
	street: { type: String },
	city: { type: String },
	province: { type: String },
	country: { type: String }
})

export default addressSchema