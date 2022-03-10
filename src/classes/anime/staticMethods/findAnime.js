import anime from '../../../schemas/anime.schema.js';

const findAnime = async (animeID) => {
  try {
    let Anime;
    switch (animeID){
      case "1":
          Anime = await anime.findOne({id: 1, private: false});
          break
      case "2":
          Anime = await anime.findOne({id: 2, private: false});
          break
      case "3":
          Anime = await anime.findOne({id: 3, private: false});
          break
      case "4":
          Anime = await anime.findOne({id: 4, private: false});
          break
      case "5":
          Anime = await anime.findOne({id: 5, private: false});
          break
      case "6":
          Anime = await anime.findOne({id: 6, private: false});
          break
      case "7":
          Anime = await anime.findOne({id: 7, private: false});
          break
      case "8":
          Anime = await anime.findOne({id: 8, private: false});
          break
      default:
          Anime = await anime.findOne({id: animeID, private: false});
          break
          
          
          
          



    }

    if (Anime) {

      await anime.findByIdAndUpdate(Anime._id, {
        $inc: {
          views: 1,
        },
      });
      // await Historial.save();
      return Anime;
    } else {
      return {message: 'El anime solicitado no existe.'};
    }
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default findAnime;
