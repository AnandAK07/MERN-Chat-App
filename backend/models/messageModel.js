const mongoose=require("mongoose");

const messageSchema =mongoose.Schema(
    {
        sender:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
        content:{type:String,trim:true},
        chat:{type:mongoose.Schema.Types.ObjectId,ref:"Chat"}
    },
    {
        timestamps:true
    }
)

const Message = mongoose.model("Message", messageSchema);

module.exports = { Message };

// nameofSender or Id
// contentOfMessage
// ref of chat it belongs to