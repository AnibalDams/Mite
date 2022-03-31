import User from '../classes/user/index.js';


const selectUserProfile = async (id)=>{
  try {
    const select = User.selectUserProfile(id);
    return select;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default selectUserProfile;
