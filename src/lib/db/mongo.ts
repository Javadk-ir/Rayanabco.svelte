import {MongoClient} from "mongodb"
import mongoose from "mongoose"

import { MONGO_URL } from '$env/static/private'

const client = new MongoClient(MONGO_URL);

export async function start_mongo(): Promise<MongoClient> {
    await mongoose.connect(MONGO_URL);
    console.log(`Mongoose Connected to Database Successfully✅`);
    console.log("Starting Mongo");
    return client.connect()
}







export default client.db();