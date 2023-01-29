import mongoose, { Schema } from 'mongoose'
import { MongoClient } from 'mongodb';
interface Stall {
    stall: number,
    vote?: number
}

const userSchema = new Schema<Stall>({
    stall: {type: Number, required: true}
});
export const stallSchema= new mongoose.Schema({
    stall:{
        type: Number,
        default:0
    }
})



const connectToDatabase = async (uri:string) => {
    const client = new MongoClient(uri);
    client.connect();
    return client.db()
}

export default connectToDatabase