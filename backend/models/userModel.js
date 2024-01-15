const mongoose=require("mongoose")

const userShema=mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        pic: { type: String, required: true, default:`https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg`}
    },
    {
        timestamps:true
    }
)


const User=mongoose.model("User",userShema)

module.exports={User}
// name
// email
// password
// pic