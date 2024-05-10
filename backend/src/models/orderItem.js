import mongoose from "mongoose";

const oderItemsSchema = mongoose.Schema({

    quantity:{
        type:Number,
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }

})
const OrderItems = mongoose.model("orderItems", oderItemsSchema)
export default OrderItems;