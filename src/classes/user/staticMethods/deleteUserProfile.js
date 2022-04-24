import UserProfile from '../../../schemas/userProfile.schema.js';


const deleteUserProfile = async (profileId)=>{
  try {
    await UserProfile.findByIdAndRemove(profileId);
    return 'perfil eliminado.';
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default deleteUserProfile;
