import mongoose from 'mongoose'

const { model, Schema } = mongoose

const blogSchema = new Schema({
    title: {
      type: String,
    },
    matn: {
      type: String,
    },
    tarikh: {
      type: String,
    },
    matnkholase: {
      type: String,
    },
    submmitedby: {
      type: String,
    },
    image: {
      type: String,
    },
    images: {
      type: String,
    },
    tags: {
      type: Array,
    },
  });

export const blogModel = model("blog", blogSchema)