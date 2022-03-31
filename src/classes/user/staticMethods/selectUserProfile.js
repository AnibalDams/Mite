import UserProfile from '../../../schemas/userProfile.schema.js';
import User from '../../../schemas/user.schema.js';

const _selectUserProfile = async (id)=>{
  try {
    const find = await UserProfile.findOne({id});
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default _selectUserProfile;
