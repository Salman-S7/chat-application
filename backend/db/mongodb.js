import mongoose from "mongoose";

const connectToDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Conneted to mongodb url');
    } catch (error) {
        console.log("Error while connecting with MongoDb");
    }

}


export default connectToDb;