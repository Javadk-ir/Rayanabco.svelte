import mongoose from 'mongoose'

const { model, Schema } = mongoose


const EnvelopSchema = new Schema({
    category: { type: String },
    type: { type: String },
    Condition: { type: String },
    title: { type: String },
    number: { type: Number },
    createddate: { type: String },
    comingfrom: { type: String },
    goingto: { type: Array },
    filenameextraisExist: { type: String },
    goto: { type: String },
    caption: { type: String },
    filenameextra: { type: String },
    filepathextra: { type: String },
    filenameenv: { type: String },
    filepathenv: { type: String },
    matn: { type: String },
    signuture: { type: String },
    signutureJob: { type: String },
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

export const envelopModel = model("envbank", EnvelopSchema)