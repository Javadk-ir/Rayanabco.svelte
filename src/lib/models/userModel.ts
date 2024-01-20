import mongoose from 'mongoose'

const { model, Schema } = mongoose

const userSchema = new Schema({
    userID: { type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
    parentProffesion: { type: String },
    childProffesion: { type: String },
    class: { type: String },
    gender: { type: String },
    morekhasi: { type: String },
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
  });

export const userModel = model("user", userSchema)