import { useState } from "react";
import useConversation from "../zustand/useConversation";

const useSendMessege = ()=>{

    const [loading , setLoading ] = useState(false)
    const { messeges, selectedConversation, setMesseges } = useConversation();

        const sendMessege = async (messege)=>{
            setLoading(true)
            try {
                const res = await fetch(`api/messeges/send/${selectedConversation?._id}`,{
                    method: "POST",
                    headers : {"content-type": "application/json"},
                    body : JSON.stringify({messege})
                });
    
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                console.log(data);
                setMesseges([...messeges, data]);
                
            } catch (error) {
                // console.log(error)
                alert(error.message);
            }finally{
                setLoading(false)
            }
        
        }

    return {loading, sendMessege};
}

export default useSendMessege;