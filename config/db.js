const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
            .then(()=> console.log('server connected to database successfully'))
            .catch((error)=> console.log('something went wrong while connecting to the database', error))
    }catch(error){
        console.log('error while connecting to the datebase', error);
    }
}

module.exports = connectDB; 