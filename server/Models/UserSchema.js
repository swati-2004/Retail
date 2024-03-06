import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    county:{
        type: String,
        enum: ['India', 'USA', 'Canada', 'UK'],
        default: 'India'
    },
    state:{
        type:String,
        enum:[["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],],
        require:true,
    },
    distict:{
        type:String,
        require:true,
    },
    address:{
        type:Number,
        
    },
    pincode:{
        type:Number,
        require:true,
    },
    image:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nameslook.com%2Fsdfgdf&psig=AOvVaw2xv_EgJ0FpqFiLEL_nHBJ6&ust=1709839719429000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj3iL-v4IQDFQAAAAAdAAAAABAD'
    },
    tokens:{
        type:String,
        default:1,
    },
    password:{
        type:String,
        require:true,
    },
    refferal_code:{
        type:String,
        require:true,
    },
    
},{timestamps:true});
const User=mongoose.model('User',UserSchema);
export default User;