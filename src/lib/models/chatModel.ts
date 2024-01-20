import mongoose from 'mongoose'

const { model, Schema } = mongoose

const chatSchema = new Schema({
  chatroom: { type: Array },
  GPname: { type: String },
  GPicon: { type: String },
  GPcreator: { type: String },



  message: [{
    send: { type: String },
    body: { type: String },
    time: { type: Date },
    seen: { type: Boolean },
  }],

});

export const chatModel = model("chat", chatSchema)