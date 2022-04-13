import UserProfileAnimeList from '../../../schemas/list.schema.js';
import UserProfile from '../../../schemas/userProfile.schema.js';


const findAnimeInList = async (userProfile) => {
  try {
    const find = await UserProfileAnimeList.find({userProfile});
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default findAnimeInList;
