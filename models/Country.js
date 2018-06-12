import { Schema } from 'mongoose'
import provinceSchema from './provinceSchema'


const countrySchema = new Schema({
	name: { type: String },
	isoA2: { type: String },
	isoA3: { type: String },
	phoneCode: { type: String },
	currencyCode: { type: String },
	currencySimbol: { type: String },
	uriFlag: { type: String },
	provinces: [provinceSchema],
	enabled: { type: Boolean, default: false } //Todos se crean desactivados.
})





const Country = mongoose.model('Country', countrySchema, 'countries')

export default Country