require("dotenv").config()

const
mongoose = require("mongoose"),
conStr = process.env.CONECTION_STRING

const connect = async () =>{
    try {
        await mongoose.connect(conStr)
        console.log("db is connected");
    } catch (error) {
        console.log(error.massage);
    }
}

connect()