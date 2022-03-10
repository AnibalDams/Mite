import anime from '../../../schemas/anime.schema.js';

const findAnime = async (animeID) => {
  try {
    const Anime = await anime.findOne({
      id:
        animeID === '1' ?
          1 :
          animeID === '2' ?
          2 :
          animeID === '3' ?
          3 :
          animeID === '4' ?
          4 :
          animeID === '5' ?
          5 :
          animeID === '6' ?
          6 :
          animeID === '7' ?
          7 :
          animeID === '8' ?
          8 :
          animeID,
      private: false,
    });
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
