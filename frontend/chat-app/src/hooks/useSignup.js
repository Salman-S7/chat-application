import { useState } from "react"
import { useAuthContext } from "../context/authContext";

const useSignup =  () =>{
    const [loading, setLoading ] = useState(false);
    const { setAuthUser }= useAuthContext();

    const signup = async ({fullName,userName,gender,password,confirmPassword})=>{
        const isinputValid = handleInputValidation({fullName,userName,gender,password,confirmPassword});
        if(!isinputValid) return;

        setLoading(true);
        try {
            const response = await fetch('/api/auth/signup',{
                method : "POST",
                headers : {"Content-type" : 'Application/json'},
                body : JSON.stringify({fullName,userName,gender,password,confirmPassword})
            })

            const data = await response.json();
            if(data.error){
                throw new Error(data.error);
            }

            //let's save to localstorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            
        } catch (error) {
            alert(error.messege);
        }finally{
            setLoading(false);
        }

    }
    return {loading, signup};

}

export default useSignup;

function handleInputValidation({fullName,userName,gender,password,confirmPassword}){
    if(!fullName || !userName || !gender || !password ||  !confirmPassword){
        alert("Fill all the fields!");
        return false;
    }
    if(password !== confirmPassword){
        alert("Passwords does'nt match");
        return false;
    }
    if(password.length < 6){
        alert("Password must be more than 6 char long");
        return false;
    }
    return true;
}