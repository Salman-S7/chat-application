import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import generateJwtAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    try {
        const {fullName, userName, password , confirmPassword, gender } = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error : "Password does'nt match!!!"});
        }

        const user = await User.findOne({userName});
        
        if(user){
            return res.status(400).json({error : "Username already exists"});
        }

        //let's hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);



        //here take the profile pic from api ==> avatar.placeholder
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        let newUser = new User({
            fullName,
            userName,
            password : hashedPassword,
            gender,
            profilePic : gender === 'male' ? boyProfilePic  : girlProfilePic
         })
         if(newUser){
            await newUser.save();
            generateJwtAndSetCookie(newUser._id, res);
            res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                userName: newUser.userName,
                profilePic : newUser.profilePic
            });
         }else{
            res.status(400).json({error : "Invalid user data"});
         }

    } catch (error) {
        console.log("Error in signup controller",error)
        res.status(500).json({error : "Internal server error!"})
    }
}

export const login = async (req,res)=>{
    try {
        const {userName , password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error : "Invalid credentials"});
        }
        generateJwtAndSetCookie(user._id, res)
        
        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            userName : user.userName,
            profilePic : user.profilePic
        });

    } catch (error) {
        console.log("Error in login controller",error)
        res.status(500).json({error : "Internal server error!"})
    }
}


export const logout =  (req,res)=>{
    try {
        res.cookie("jwt", "",{maxAge : 0})
        res.status(200).json({messege : "Logged out succesfully"})
    } catch (error) {
        console.log("Error in login controller",error)
        res.status(500).json({error : "Internal server error!"})
    }
}

