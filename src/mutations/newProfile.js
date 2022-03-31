import User from '../classes/user/index.js';


const newProfile = async (name, avatar, user)=>{
  try {
    const _new = User.newProfile(name, avatar, user);
    return _new;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default newProfile;
