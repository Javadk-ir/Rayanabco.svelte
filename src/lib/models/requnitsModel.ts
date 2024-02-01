import mongoose from 'mongoose'

const { model, Schema } = mongoose

const requnitsSchema = new Schema({
    fromwehre: { type: String },
    towhere: { type: String },
    bywho: { type: String },
    caption: { type: String },
    caption2: { type: String },
    caption2Image: { type: String },
    units: { type: String },






    createdAt: {
      type: String,
      default: new Intl.DateTimeFormat("fa-IR", {
        dateStyle: "full",
        timeStyle: "long",
      }).format(Date.now()),
    },
    updatedAt: {
      type: String,
      default: new Intl.DateTimeFormat("fa-IR", {
        dateStyle: "full",
        timeStyle: "long",
      }).format(Date.now()),
    },
  });

export const requnits = model("requnits", requnitsSchema)