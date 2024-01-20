import mongoose from 'mongoose'

const { model, Schema } = mongoose

const orderSchema = new Schema({
    type: { type: String, required: true },
    user: { type: String },
    userphoneNumber: { type: String, required: true },
    copycardmeli: { type: String, default: "none" },
    sanadmalekiyat: { type: String, default: "none" },
    arzeshafzode: { type: String, default: "none" },
    taqiratmondarej: { type: String, default: "none" },
    agahitasis: { type: String, default: "none" },
    asasname: { type: String, default: "none" },
    ejarename: { type: String, default: "none" },
    cartmeli: { type: String, default: "none" },
    shenasname: { type: String, default: "none" },
    govvahimahzari: { type: String, default: "none" },
    parvaneh: { type: String, default: "none" },
    userID: { type: String },
    shomareeghtesadi: { type: String },
    cartmelineveshte: { type: String },
  
    city: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
    parentProffesion: { type: String },
    childProffesion: { type: String },
    class: { type: String },
    picture: { type: String },
    isvalidclient: { type: String },
    info: { type: String },
    namecompany: { type: String },
    postcode: { type: String },
    resphonenumber: { type: String },
    addressbar: { type: String },
    sentoption1: { type: String },
    sentoptioncaption1: { type: String },
    sentoption2: { type: String },
    sentoptioncaption2: { type: String },
    sentoption3: { type: String },
    sentoptioncaption3: { type: String },
    Theme: { type: String },
  
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

export const orderModel = model("order", orderSchema)