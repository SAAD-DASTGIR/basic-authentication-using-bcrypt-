// import user from './user.js';
import user from '../user.js'
import express from 'express';
import bcrypt, { hash } from 'bcryptjs';
const app= express()
const jwtsecret="2488db2dac40d0fec0c962cab87eb0a1bf3c5f8e3f6eb10396b500dad5fe7262008911"
app.use(express.json())
export const auth =(req,res,next)=>{
const {username,password}=req.body
bcrypt.hash(password,10).then(async(hash)=>{
    await username.create({
        username,
        password:hash,
    })
}).then(user=>{
    const maxAge= 3* 60 *60
    const token= jwt.sign({
        id:user._id},
        jwtsecret,{
        expiresIn:maxAge})
    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:maxAge*1000,
    })
    res.status(200),
    res.json(
        {
            message:"User created successfully",
            user,
        }
    )
}).catch((err)=>{
    res.status(400)
    res.json({
        message:"user not created successfully",
        error:err,
})})

}

export const login=(req,res,next)=>{
    const {username,password}=req.body
    if(!username|| password){
        res.status(400).json({
            message:"username or password is missing",
            error:error.message
        })
    }
    const user = username.findOne({username})
    if(!user){
        res.status(400).json({
            message:"user not found",
            error:error.message
        })
    }
    else{
        try{
            const maxAge= 3*60*60
            bcrypt.compare(password, user.password).then((result) => {
                if (result) {
                    const token = jwt.sign({ id: user._id }, jwtsecret, { expiresIn: maxAge });
        
                    res.cookie("jwt", token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000, 
                    });
        
                    res.status(200).json({
                        message: "User logged in successfully",
                        user: user,
                    });
                } else {
                    res.status(400).json({
                        message: "User not logged in successfully",
                    });
                }
            });
        }
        catch(error){
            res.status(400).json({
                message:"user not logged in successfully",
                error:error.message
            })
        }
    }
}

export const admin=(req,res,next)=>{
    const cookie= req.cookies.jwt
    if(token){
        jwt.verify(token,jwtsecret,async(err,decodedToken)=>{
            if(err){
                res.status(400).json({
                    message:"User not verified",
                    
            })
            if(!decodedToken.role==="Admin"){
                res.status(400).json
                ({
                    message:"User not authorized to access this route",   
                })
            }
            else{
                res.status(200).json({
                    message:"User is verified",
            })
        }}})
    }
}
export const basicUser=(req,res,next)=>{
    const cookie=req.cookies.jwt
    if(token){
        jwt.verify(token,jwtsecret,async(err,decodedToken)=>{
            if(err){
                res.status(400).json({
                message:"User not verified",      
            })}
            if(!decodedToken.role==="Basic"){
                res.status(400).json({
                    message:"User not authorized to access this route",
                })
            }
            else{
                res.status(200).json({
                    message:"User is verified",
                })
            }
        })
    }
}