const mongoose = require('mongoose');
const connectDB = () => {
    console.log("DB Connected");
    return mongoose.connect(process.env.MONGODB_URL);
};

module.exports = connectDB;

/* https://github.com/chraman/ipl/blob/master/data/json/matches.json */
