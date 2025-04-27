const IPLModel = require("../models/ipl");
const getAllIplData = async(req,res) => {

    const {city,team2} = req.query;
    const queryObject = {};
    if(city){
        queryObject.city = city;
    }
    if(team2){
        queryObject.team2 = {$regex: team2,$options: 'i'};
    }
    const myIPLData = await IPLModel.find(queryObject);
    res.status(200).json({myIPLData});
};

module.exports = {getAllIplData};