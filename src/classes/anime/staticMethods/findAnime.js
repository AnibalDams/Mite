import anime from '../../../schemas/anime.schema.js';

const findAnime = async (animeID) => {
  try {
    const Anime = await anime.findOne({id: animeID,private: false,});
    console.log(Anime)

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
