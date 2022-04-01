import UserProfile from '../../../schemas/userProfile.schema.js';
import User from '../../../schemas/user.schema.js';


const _findAllProfiles = async (user)=>{
  try {
    const findUser = await User.find({username: user});
    if (!findUser) {
      return [{
        message: 'Este usuario no existe',
      }];
    } else {
      const findProfiles = await UserProfile.find({user});
      return findProfiles;
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default _findAllProfiles
