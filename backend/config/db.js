const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config()
const colors=require('colors')

const connectDB=async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1); // Exit with a non-zero code to indicate failure
    }
}

// , {
//     useNewUrlParser:true,
//     useNewUrlParser:true,
// }

module.exports = { connectDB }