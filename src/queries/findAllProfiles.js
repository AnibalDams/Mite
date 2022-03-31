import User from '../classes/user/index.js';


const findAllProfiles = async (user)=>{
  try {
    const select = User.findAllProfiles(user);
    return select;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default findAllProfiles;
