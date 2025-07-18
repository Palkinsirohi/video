import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema =new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true 

        },

        email:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
             },
  
         fullName:{
            type:String,
            required:true,
            
            
            trim:true,
            index:true
             },
             avatar:{
                type:String, //cloudinary url for the profile image
                required:true,
             },
             coverImage:{
                type:String, //cloudinary url for the cover image
             },
             watchHistory:[
                {
                    type:Schema.Types.ObjectId,
                    ref:"video"
                }
            ],
            password:{
                type:String,
                required:[true,"Password required"]
            },
            refreshToken:{
                type:String

            }

    },
    { timestamps:true}
)
userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect=async function (Password){
    return await bcrypt.compare(Password,this.password)}

    userSchema.methods.generateAccessToken=function(){
     return    jwt.sign(
            {id:this._id,
              email:this.email,
              username:this.username,
              fullName:this.fullName  
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:process.env.ACCESS_TOKEN_EXPIRY},
        )
    }
    userSchema.methods.generateRefreshToken=function(){
         return    jwt.sign(
            {id:this._id,
              email:this.email,
              username:this.username,
              fullName:this.fullName  
            },
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:process.env.REFRESH_TOKEN_EXPIRY},
        )
    
    }

export const User =mongoose.model("User",userSchema)