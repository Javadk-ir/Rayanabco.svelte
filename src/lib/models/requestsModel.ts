import mongoose from 'mongoose'

const { model, Schema } = mongoose

const requestsSchema = new Schema({
    type: { type: String },
    caption: { type: String },
    bywho: { type: String },
    bywhochildprofession: { type: String },
    bywhoparentprofession: { type: String },

    startdate: { type: String },
    date: { type: String },
    enddate: { type: String },
    priority: { type: String },
    nextstep: { type: String },
    reqnumber: { type: Number },
    
    masol: { type: String },
    sarparast: { type: String },
    masolname: { type: String },
    sarparastname: { type: String },

    rejectreasson: { type: String },
    rejector: { type: String },
    rejectbydate: { type: String },


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

export const requestsModel = model("requests", requestsSchema)