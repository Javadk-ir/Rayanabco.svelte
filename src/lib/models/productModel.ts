import mongoose from 'mongoose'

const { model, Schema } = mongoose


const mahsolSchema = new Schema({
    title: { type: String },
    category: { type: String },
    keyinfo: { type: Array },
    detail: { type: Object },
    caption: { type: Array },
    captionTitle: { type: Array },
    images: { type: Array },
    image: { type: Array },
  
    mG16B: { type: Number },
    mG32B: { type: Number },
    mG64B: { type: Number },
    mG128B: { type: Number },
    mG256B: { type: Number },
    mG512B: { type: Number },
    mT1B: { type: Number },
    mT2B: { type: Number },
  
    cAG16B: { type: Number },
    cAG32B: { type: Number },
    cAG64B: { type: Number },
    cAG128B: { type: Number },
    cAG256B: { type: Number },
    cAG512B: { type: Number },
    cAT1B: { type: Number },
    cAT2B: { type: Number },
  
    cBG16B: { type: Number },
    cBG32B: { type: Number },
    cBG64B: { type: Number },
    cBG128B: { type: Number },
    cBG256B: { type: Number },
    cBG512B: { type: Number },
    cBT1B: { type: Number },
    cBT2B: { type: Number },
  
  
    cCG16B: { type: Number },
    cCG32B: { type: Number },
    cCG64B: { type: Number },
    cCG128B: { type: Number },
    cCG256B: { type: Number },
    cCG512B: { type: Number },
    cCT1B: { type: Number },
    cCT2B: { type: Number },
  
  
  });
export const productModel = model("mahsolats", mahsolSchema)