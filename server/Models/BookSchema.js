import mongoose, { mongo } from "mongoose";

const BookSchema= new mongoose.Schema({

    subject:{
        type:String,
        required:true,
    },
    class:{
        type:String,
        required:true,
    },
    publication_year:{
        type:Number,
        required:true,
    },
    publication_name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        default:1,
    },
    original_price:{
        type:Number,
        require:true,
    },
    seller_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:'College'
    },
    college_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'College',
    },
    volume:{
        type:Number,
        default:1,
    },
    language:{
        type: String,
        enum:['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Bengali', 'Gujarati', 'Marathi', 'Punjabi', 'Odia', 'Urdu', 'Assamese', 'Nepali', 'Sanskrit', 'Konkani', 'Manipuri', 'Bodo', 'Dogri', 'Kashmiri', 'Maithili', 'Santali', 'Sindhi'],
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    buyes_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    payment_method:{
        type:String,
        enum:["COD","Prepaid"],
        default:"COD",

    },
    delivery_mode:{
        type:String,
        enum:["Self","Courier"],
        default:"Self",
    },
    tages:{
        type:[String],
        default:[],
    },



},{timestamps:true});

const Book=mongoose.model('Book',BookSchema);
export default Book;
