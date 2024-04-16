import Conversation from "../models/conversation.model.js";
import Messege from "../models/messege.model.js";


export const sendMessege = async (req,res)=>{
    try {
        const { messege } = req.body;
        const { id : recieverId }= req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants : { $all : [senderId , recieverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId, recieverId]
            })
        }

        const newMessege = new Messege({
            senderId,
            recieverId,
            messege
        });


        if(newMessege){
            conversation.messeges.push(newMessege._id);
        }
        
        //to run in parallel
        await Promise.all([conversation.save(), newMessege.save()])

        res.status(201).json(newMessege);
        
    } catch (error) {
        console.log("Error in the sendMessege controller ", error)
        res.status(500).json({error : "Internal server error!"})
    }
}


export const getMesseges = async(req, res)=>{
    try {
        const { id : userToChatId }= req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : { $all : [senderId, userToChatId]}
        }).populate("messeges");
        if(!conversation){
            res.status(200).json([])
        }
        res.status(200).json(conversation.messeges)
    } catch (error) {
        console.log("Error in the sendMessege controller ", error)


        res.status(500).json({error : "Internal server error!"})
    }
}