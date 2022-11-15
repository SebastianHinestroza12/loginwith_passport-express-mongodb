import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import * as Interface from "../interfaces/index";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    console.log(error);
    throw new Error("Error al codificar la contraseña");
  }
});

userSchema.methods.comparePassword = async function (password: string) {
  const prueba: boolean = await bcrypt.compare(password, this.password);
  return prueba;
};

export default mongoose.model<Interface.IUser>("Users", userSchema);
