import { Schema } from 'mongoose'
import addressSchema from './addressSchema'
import voucherSchema from './voucherSchema'
import orderSchema from './orderSchema'


const userSchema = new Schema({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String, unique: true, lowercase: true },
	password: { type: String },
	/* AUTHORIZATION */
	roles: {
		type: [String],
		enum: {
			values: [
				'PROSPECT',
				'CUSTOMER',
				'MEMBER',
				'ADMIN'
			],
			message: 'Este ROLE no esta permitido!'
		},
		default: ['PROSPECT']
	},
	vouchers:[voucherSchema],
	addresses: [addressSchema],
	orders: [orderSchema],
	lastLogin: { type: Date, default: Date.now },
	created: { type: Date, default: Date.now },
	updated: { type: Date }, /* UPDATED IN PRE MIDDLEWARE */
	enabled: { type: Boolean, default: true }
})


/**
* Pre-Middleware
**/
userSchema.pre('update', function(next){
	let User = this
	//Actualizamos el campo 'updated' despues de hacer cualquier update en el usuario
	User.update({},{ $set: { updated: Date.now() } })

	next()
})


const User = mongoose.model('User', userSchema, 'users')

export default User