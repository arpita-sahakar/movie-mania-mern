import Mongoose from "mongoose";

const userSchema = Mongoose.Schema({
    passWord: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
});

const User = Mongoose.model("user", userSchema);

export default User;