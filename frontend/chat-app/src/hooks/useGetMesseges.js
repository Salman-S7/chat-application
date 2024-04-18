import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMesseges = ()=>{

    const [loading , setLoading ] = useState(false)
    const { selectedConversation, setMesseges } = useConversation();

    useEffect(()=>{
        const getMesseges = async ()=>{
            setLoading(true)
            try {
                const res = await fetch(`api/messeges/get/${selectedConversation?._id}`);
    
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setMesseges(data);
            } catch (error) {
                // console.log(error)
                alert(error.message);
            }finally{
                setLoading(false)
            }
        }
        
        selectedConversation?._id && getMesseges();
    },[selectedConversation])

    return {loading}
}

export default useGetMesseges;