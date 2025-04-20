const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const product_routes = require('./routes/products');

// app.get("/",(req,res) => {
//     res.send("Hi, I am Nikunj");
// });

app.use(express.json());

app.use("/api/products/",product_routes);

const start = async () => {
    try{
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes I am connected`);
        })
    }catch(error){
        console.log(error);
    }
}

start();