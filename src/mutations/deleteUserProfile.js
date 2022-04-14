import User from '../classes/user/index.js';


const deleteUserProfile = async (profileId)=>{
  try {
    const _delete = User.deleteUserProfile(profileId);
    return _delete;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default deleteUserProfile;
