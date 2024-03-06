import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
    comment_type:{
        type:String,
        enum:["HandWritten","QuestinAnswer"],
        require:true,
    },
    comment:{
        type:String,
        required:true,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true,
    },
    user_name:{
        type:String,
        required:true,
    },
    user_image:{
        type:String,
        required:true,
    },
    post_id:{
        type:mongoose.Schema.type.ObjectId,
        require:true,
    },

},{timestamps:true});

const Comment = mongoose.model('Comment',CommentSchema);
export default Comment;