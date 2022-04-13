import UserProfileAnimeList from '../../../schemas/list.schema.js';


const findAnimeInList = async (animeId, userProfile) => {
  try {
    const find = await UserProfileAnimeList.findOne({animeId, userProfile});
    if (find) {
      return find;
    } else {
      return {
        message: 'Este anime no se encuentra en la lista',
      };
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default findAnimeInList;
