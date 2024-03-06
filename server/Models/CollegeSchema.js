import mongoose from "mongoose";

const CollegeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        enum:['India','USA','canada'],

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
        require:true
    },
    pincode:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    userName:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nameslook.com%2Fsdfgdf&psig=AOvVaw2xv_EgJ0FpqFiLEL_nHBJ6&ust=1709839719429000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIj3iL-v4IQDFQAAAAAdAAAAABAD'
    },
    location:{
        type:Object,
        require:true,
    },
},{timestamps:true});

const College= mongoose.model('college',CollegeSchema);
export default College;