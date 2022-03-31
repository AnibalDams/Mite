import UserProfile from '../../../schemas/userProfile.schema.js';
import User from '../../../schemas/user.schema.js';
import {v4} from 'uuid';


const _newProfile = async (name, avatar, user)=>{
  try {
    const id = v4();
    const findUser = await User.findOne({username: user});
    if (findUser) {
      const _new = new UserProfile({id, name, avatar, user});
      await _new.save();
      return `Perfil creado. ${_new.id}`;
    } else {
      return 'Usuario invalido.';
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default newProfile;
