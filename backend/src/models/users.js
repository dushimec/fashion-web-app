import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }


})
userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
userSchema.set('toJSON', {
    virtual: true
})

const Users = mongoose.model("users", userSchema)
export default Users;