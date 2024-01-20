import mongoose from 'mongoose'

const { model, Schema } = mongoose

const CustomersSchema = new Schema({
  phoneNumber: { type: String },
  SabetNumber: { type: String },
  shopName: { type: String },
  managementName: { type: String },
  lastCall: { type: String },
  nextCall: { type: String },
  resualtCall: { type: String },
  caption: { type: String },
  city: { type: String },
  submmitedbywho: { type: String },


  createdAt: {
    type: Date,
    default:Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
});
export const customerModel = model("Customers", CustomersSchema)