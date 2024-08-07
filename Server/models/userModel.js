import mongoose from 'mongoose'

const userSkema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User=mongoose.model('user',userSkema)
export default User;