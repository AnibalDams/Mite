import User from '../../../schemas/user.schema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const _login = async (username, password) => {
  try {
    const user = await User.findOne({username});
    if (user) {
      const comparePassword = await bcrypt.compare(password, user.password);
      if (comparePassword) {
        const token = jwt.sign({_id: user._id, id: user.id, username}, process.env.JWTKEY);

        return token;
      } else {
        return 'Contraseña incorrecta';
      }
    } else {
      return 'Nombre de usuario incorrecto';
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _login;
