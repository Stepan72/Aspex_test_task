import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  login: {
    type: String,
    unique: [true, "Login already exists!"],
    required: [true, "Login is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    match: [
      /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Password is invalid, it should contain 6-20 alphanumeric letters and be unique!",
    ],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
