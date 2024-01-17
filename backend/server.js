const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const colors = require("colors")
const userRoutes =require('./routes/userRoutes')
const { notFound, errorHandler }=require('./middlewares/errorMiddleware')

dotenv.config();

connectDB()

const app = express();

//to accept the JSON data
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API is running successfully")
})

app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000; // Use a default value if PORT is not provided
app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`.yellow);
});


