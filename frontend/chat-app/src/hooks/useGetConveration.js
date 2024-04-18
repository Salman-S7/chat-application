import { useEffect, useState } from "react"

const useGetConversation = ()=>{
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations ] = useState([]);

    useEffect(()=>{
        const getCoversation = async ()=>{
            setLoading(true)
            try {
                const res = await fetch('/api/users/get');
                const data = await res.json();

                if(data.error){
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                alert(error.message)
            }finally{
                setLoading(false)
            }
        }
        getCoversation();
    },[])

    return { loading, conversations };
}

export default useGetConversation;