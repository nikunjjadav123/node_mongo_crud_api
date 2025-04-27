require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const ipl_data_routes = require('./routes/ipl_data');
const connectDB = require("./db/connect")

app.use(express.json());

app.use("/api/ipl_data/",ipl_data_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes I am connected`);
        })
    }catch(error){
        console.log(error);
    }
}

start();