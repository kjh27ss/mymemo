import mongoose, { Schema } from "mongoose";

const memoSchema = new Schema(
    {
    title : String,
    contents : String,
    date : {
        type : Date,
        default : Date.now()
    }
    },{
        timestamp : true
    }
);

const Memo = mongoose.models.Memo || mongoose.model("Memo", memoSchema);

export default Memo;