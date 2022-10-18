const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.createConnection('mongodb://127.0.0.1:27017/nodejs',{
            useNewUrlParser:true
        });
        console.log('connected')
    }
    catch(error){
        console.log('failure')
    }
}
module.exports = {connect};