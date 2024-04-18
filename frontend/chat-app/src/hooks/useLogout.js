import { useState } from "react"
import { useAuthContext } from "../context/authContext";

const useLogout =  () =>{
    const [loading , setLoading ] = useState(false);
    const {setAuthUser} = useAuthContext()
    const logout = async ()=>{
        setLoading(true);
        try {
            const response = await fetch('/api/auth/logout',{
                method : "POST",
                headers : {"Content-type" : 'Application/json'},
            })

            const data = await response.json();
            if(data.error){
                throw new Error(data.error);
            }

            //let's save to localstorage
            localStorage.removeItem("chat-user");
            setAuthUser(null);
            
        } catch (error) {
            alert(error.messege);
        }finally{
            setLoading(false);
        }

    }
    return {loading, logout};

}

export default useLogout;

