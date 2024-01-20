import mongoose from 'mongoose'

const { model, Schema } = mongoose


const envelopnumberSchema = new Schema({ number: { type: Number } });

export const envelopeNumberModel = model("envnumber", envelopnumberSchema)