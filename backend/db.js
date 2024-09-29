const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/paytm').then(()=>{
    console.log('connected to mongodb')
}).catch((error)=>{
    console.log('connection error', error)
})

// const connectMongodb = async()=>{
//     try {
//         mongoose.connect('localhost/3000/paytm');
//         console.log('connected to mongodb')
//     } catch (error) {
//         console.log(error)
//     }
// }
//call the function in main index.js file connectMongodb() and import  it

const userSchema =new  mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30,

    },
    password:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:5,
        maxLength:30,

    },
    firstname:{
        type:String,
        trim:true,
        lowercase:true,
    },
    lastname:{
        type:String,
        trim:true,
        lowercase:true,
    },

})

//new Account table schema

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    
    },
    balance:{
        type:Number,
        required:true,
        trim:true
    }
})

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account,
};