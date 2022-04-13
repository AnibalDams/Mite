import UserProfileAnimeList from '../../../schemas/list.schema.js';
import UserProfile from '../../../schemas/userProfile.schema.js';


const addAnimeToList = async (animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile)=>{
  try {
    const findProfile = await UserProfile.findOne({userProfile});
    if (findProfile) {
      const findAnimeInList = await UserProfileAnimeList.findOne({animeId, userProfile});
      if (findAnimeInList) {
        return 'Este anime ya ha sido agregado a la lista';
      } else {
        const _new = new UserProfileAnimeList({animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile});
        await _new.save();
        return `Anime ${animeName} agregado a la lista de ${userProfile}`;
      }
    } else {
      return 'Este perfil no existe';
    }
  }	catch (e) {
    console.error(e);
    throw new Error(e);
  }
};


export default addAnimeToList;
