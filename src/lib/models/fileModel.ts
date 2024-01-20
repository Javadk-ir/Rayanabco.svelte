import mongoose from 'mongoose'

const { model, Schema } = mongoose

export const fileModels = new Schema({
    filetitle: { type: String },
    filesentby: { type: String },
    filegoingto: { type: Array },
    filecaption: { type: String },
    filename: { type: String },
    filepath: { type: String },
    filesize: { type: String },
    category: { type: String },
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
})

export const fileModel = model("fileshare", fileModels)