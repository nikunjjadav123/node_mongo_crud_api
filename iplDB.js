require("dotenv").config();
const connectDB = require("./db/connect");
const ipldata = require("./models/ipl");
const iplJson = require("./ipldata.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await ipldata.deleteMany();
        await ipldata.create(iplJson);
        console.log("Successfully Inserted");
    }catch(error){
        console.log(error);
    }
};

start();