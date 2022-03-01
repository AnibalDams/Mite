import bcrypt from 'bcrypt';
import User from '../../../schemas/user.schema.js';


const signUp = async (username, password, admin) => {
  try {
    const userWithSameUsername = await user.findOne({username});
    const _username = username;
    if (userWithSameUsername) {
      return {
        message: 'El usuario que ingreso ya esta en uso.',
      };
    }
    const _password = await bcrypt.hash(password, 10);

    const _user = new User({
      username: _username,
      password: _password,
      avatar:
        'https://www.nacionrex.com/__export/1628273274801/sites/debate/img/2021/08/06/avatar-nacion-rex_crop1628272752516.png_423682103.png',
      admin,
    });
    await _user.save();
    return _user;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export default signUp;
