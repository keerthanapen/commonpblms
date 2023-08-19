import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://keerthanapenugonda9:Keertana@cluster0.be74zcu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("keerthana");
    cb();
}

export {db,connectToDB};