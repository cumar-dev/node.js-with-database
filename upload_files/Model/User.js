import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  profile: {
    type: String,
    required: true
  }
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    } catch (error) {
          res.status(404).json({ message: "during the saving be unseccessfully" });
    }
}) 

userSchema.methods.comparePassword = async function(inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
}

const User = mongoose.model("userSchema", userSchema);

export default User;