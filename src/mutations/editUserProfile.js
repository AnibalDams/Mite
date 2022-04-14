import User from '../classes/user/index.js';


const editUserProfile = async (profileId,profileName,profileAvatar)=>{
  try {
    const edit = User.editUserProfile(profileId,profileName,profileAvatar);
    return edit;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default editUserProfile;
