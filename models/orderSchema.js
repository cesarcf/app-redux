import { Schema } from 'mongoose'
import addressSchema from './addressSchema'
import itemSchema from './itemSchema'
import voucherSchema from './voucherSchema'

const orderSchema = new Schema({
	current: { type: Boolean , default: false },
	status: {
		type: String,
		enum: {
			values: [
				'VOID',//La orden esta vacia (No existen productos en el cart)
				'INIT',//Orden iniciada
				'FAIL',//fallo al procesar el pago.
				'UNPAID',//Orden finalizada pero sin pagar. por ej en un pedido de transfer
				'PAID',//Orden finalizada y pagada.
				'COMPLETE'//Orden finalizada y enviada.
			],
			message: 'Tiene que escoger una opción para el status del pedido'
		},
		default: 'INIT',
	},
	comment: { type: String },
	paymentMethod: {
		type: String,
		enum: {
			values: ['PAYPAL','TRANSFER','REDSYS','STRIPE']
		}
	},
	address: addressSchema,
	shoppingCart: [itemSchema], //un array de [{id, sku, units, market}] de productos
	voucher: voucherSchema,
	points: { type: Number, default:0 },
	productCost: { type: Number, default:0 },
	subTotal: { type: Number, default:0 },
	discount: { type: Number, default:0 },
	revenue: { type: Number, default:0 },
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now }
})

export default orderSchema