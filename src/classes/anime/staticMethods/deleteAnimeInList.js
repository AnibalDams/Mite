import UserProfileAnimeList from '../../../schemas/list.schema.js';


const findAnimeInList = async (animeId) => {
  try {
    await UserProfileAnimeList.findByIdAndRemove(animeId);

    return 'anime eliminado de la lista';
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default findAnimeInList;
