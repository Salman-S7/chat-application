import { useState } from "react"
import { useAuthContext } from "../context/authContext";


const useLogin =  ()=>{
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    
    const login = async ({userName, password})=>{
        if(!userName || !password){
            alert("Provide all credentials");
            return;
        }
        setLoading(true)
        try {
            const res = await fetch("/api/auth/login",
            {   
                method : "POST",
                headers : {"Content-type" : 'Application/json'},
                body : JSON.stringify({userName,password})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        
        } catch (error) {
            alert(error.message);
        }finally{
            setLoading(false);
        }

    }

    return {loading , login};
}

export default useLogin;