import mongoose from 'mongoose'

const { model, Schema } = mongoose


const orderinfoSchema = new Schema({
    submittedby: { type: String },
    ordernumber: { type: String },
    pishfactor: { type: String },
    pishfactor1: { type: String },
    pishfactor2: { type: String },
    pishfactor3: { type: String },
  
    nextstep: { type: String },
    buyerinfo: { type: String },
    userID: { type: String },
    city: { type: String },
    mahsolat: { type: Array },
  
  
    name: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    sellaccept: { type: String },
    sellacceptdate: { 
      type: Date,    
      default: new Date() },
    sellcaption: { type: String },
    calcaccept: { type: String },
    calcacceptdate: { 
      type: Date,
      default: new Date() },
    calccaption: { type: String },
    storageaccept: { type: String },
    storageacceptdate: { 
      type: Date,
      default: new Date() },
    storagecaption: { type: String },
    tahvilaccept: { type: String },
    tahvilacceptdate: { 
      type: Date,
      default: new Date() },
    rahaccept: { type: String },
    rahacceptdate: { 
      type: Date,
      default: new Date() },
    factor: { type: String },
    factor1: { type: String },
    factor2: { type: String },
    factor3: { type: String },
    anbar: { type: String },
    bywho: { type: String },
    sentoptioncaption3: { type: String },
    sentoption3: { type: String },
    sentoptioncaption2: { type: String },
    sentoption2: { type: String },
    sentoptioncaption1: { type: String },
    sentoption1: { type: String },
    resphonenumber: { type: String },
    havalebaz: { type: String },
    chek: { type: String },
    havale: { type: String },
    havalebaztarikh: { type: String },
    userwhoupload: { type: String },
  
    tarikhtayid: { 
      type: Date,
      default: new Date() 
     },
    tarikhupload: {     
      type: Date,
      default: new Date() },
    tayidby: { type: String },
    buyername: { type: String },
    takhfif: { type: String },
    price: { type: String },
    postcode: { type: String },
    namecompany: { type: String },
    companyname: { type: String },
    addressbar: { type: String },
    user: { type: String },
    rejectby: { type: String },
    rejectreasson: { type: String },
  
    rejectbydate:{ 
      type: Date,
      default: new Date() },
    createdAt: { 
      type: Date,
      default: new Date(),
    },
    updatedAt: {
      type: Date,
      default: new Date(),
    },
  });

export const orderinfoModel = model("orderinfo", orderinfoSchema)