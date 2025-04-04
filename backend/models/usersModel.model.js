import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Method for comparing passwords
userModel.methods.matchPassword = async function (enteredPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  console.log(`Password match status: ${isMatch}`);
  return isMatch;
};

userModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log(`Hashed password: ${this.password}`);
  next();
});

const User = mongoose.model("User", userModel);
export default User;
