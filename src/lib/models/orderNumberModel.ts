import mongoose from 'mongoose'

const { model, Schema } = mongoose


const ordernumberSchema=new Schema({number:{type:Number}});

export const orderNumberModel = model("ordernumber", ordernumberSchema)