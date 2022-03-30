import User from '../../../schemas/user.schema.js';
import bcrypt from 'bcrypt';
import {v4} from 'uuid';


/**
 * Crea un usuario nuevo con usuario y contraseña
 * @param {string} username Nombre de usuario
 * @param {string} password contraseña del usuario
 * @return {Promise<string>} Mensaje con información sobre como termino el proceso
 */

const _signUp = async (username, password) => {
  try {
    const usedUsername = await User.findOne({username});
    if (usedUsername) {
      return 'El usuario ya esta en uso';
    } else {
      const id = v4();
    	const saltRounds = 10;
    	const salt = await bcrypt.genSalt(saltRounds);
    	const passwordH= await bcrypt.hash(password, salt);
      const user = new User({id, username, password: passwordH});
      await user.save();
      return `Usuario creado satisfactoriamente. ${user.id}`;
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default _signUp;
