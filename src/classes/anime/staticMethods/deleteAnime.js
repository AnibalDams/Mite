import anime from '../../../schemas/anime.schema.js';

const deleteAnime = async (id) => {
  try {
    await anime.findByIdAndRemove(id);
    return `Anime ${id} eliminado`;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default deleteAnime;
