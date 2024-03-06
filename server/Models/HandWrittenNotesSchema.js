import { strictTransportSecurity } from "helmet";
import mongoose, { mongo } from "mongoose";

const HandWrittenNoteSchema= new mongoose.Schema({
    subject:{
        type:String,
        required:true,
    },
    language:{
        type: String,
        enum:['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Bengali', 'Gujarati', 'Marathi', 'Punjabi', 'Odia', 'Urdu', 'Assamese', 'Nepali', 'Sanskrit', 'Konkani', 'Manipuri', 'Bodo', 'Dogri', 'Kashmiri', 'Maithili', 'Santali', 'Sindhi'],
        required: true,
    },
    selling_price:{
        type:Number,
        required:true,
    },
    file_url:{
        type:String,
        required:true,
    },
    preview:{
        type:String,
        required:true,
    },
    number_of_pages:{
        type:Number,
        required:true,
    },
    topics:{
        type:[String],
        default:[],

    },
    seller_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        require:true,
    },
    college_id:{
        types:mongoose.Schema.types.ObjectId,
        ref:'College',
    },
    downloads:{
        type:Number,
        required:true,
    },
    tages:{
        type:[String],
        default:[],
    },

},{timestamps:true});

const HandWrittenNote=mongoose.model('HandWrittenNote',HandWrittenNoteSchema);
export default HandWrittenNote;