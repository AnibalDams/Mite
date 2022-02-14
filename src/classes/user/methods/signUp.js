import bcrypt from "bcrypt";
import user from "../../../schemas/user.schema.js";
import jwt from "jsonwebtoken";

const signUp = async (username, password, admin) => {
  try {
    const userWithSameUsername = await user.findOne({ username });
    let Username = username;
    if (userWithSameUsername) {
      return {
        message: "El usuario que ingreso ya esta en uso.",
      };
    }
    const Password = await bcrypt.hash(password, 10);

    const User = new user({
      username: Username,
      password: Password,
      avatar:
        "https://www.nacionrex.com/__export/1628273274801/sites/debate/img/2021/08/06/avatar-nacion-rex_crop1628272752516.png_423682103.png",
      admin,
    });
    await User.save();
    return User;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export default signUp;
