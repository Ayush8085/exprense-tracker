import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// HASH PASSWORD BEFORE SAVING TO DB
userSchema.pre("save", async function(next) {
    if(!this.isModified('password')) {
        return next();
    }
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
})

const User = mongoose.model('User', userSchema);

export default User;