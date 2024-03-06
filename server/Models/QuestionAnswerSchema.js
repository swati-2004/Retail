import mongoose from "mongoose";

const QuestionAnswerSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    user_name:{
        type:String,
        required:true,
    },
    user_image:{
        type:String,
        required:true,
    },
    tages:{
        type:[String],
        default:[],
    },

},{timestamps:true})
const Book=mongoose.model('Book',BookSchema);
export default Book;