import { Schema } from 'mongoose'
import raitingSchema from './raitingSchema'


const productSchema = new Schema({
	sku: { type: Number },
	market: { type: String },
	name: { type: String },
	slug: { type: String },
	flavor: { type: String },
	weight: { type: String },
	points: { type: Number },
	price: { type: Number },
	enabled: { type: Boolean },
	deleted: { type: Boolean },
	uriImage: { type: String },
	categories: { type: [String] },
	raiting: { type: [raitingSchema], 'default':[] }
})



const Product = mongoose.model('Product', productSchema, 'products')

export default Product