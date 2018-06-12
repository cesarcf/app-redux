import { Schema } from 'mongoose'


const itemSchema = new Schema({
	sku: { type: Number, ref: 'Product' },
	market: { type: String },
	units: { type: Number, default: 1 }
})



export default itemSchema