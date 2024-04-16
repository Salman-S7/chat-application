import mongoose from "mongoose";

const messegeSchema = mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    recieverId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    messege : {
        type : String,
        required : true,
    },
},{timestamps : true})

const Messege = mongoose.model("Messege", messegeSchema);
export default Messege;