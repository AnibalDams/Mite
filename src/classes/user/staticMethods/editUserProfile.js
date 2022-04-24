import UserProfile from '../../../schemas/userProfile.schema.js';


const editUserProfile = async (profileId, profileName, profileAvatar)=>{
  try {
    await UserProfile.findByIdAndUpdate(profileId, {name: profileName, avatar: profileAvatar});
    return 'perfil editado.';
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default editUserProfile;
