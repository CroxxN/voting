import { MongoClient } from 'mongodb';


const connectToDatabase = async (uri: string) => {
    const client = new MongoClient(uri);
    client.connect();
    return client.db()
}

export default connectToDatabase