import anime from '../../../schemas/anime.schema.js';


/**
   * Eliminar un anime a traves de su _id
   * @param {string} id ID de los animes en la base de datos
   * @return {Promise<string>} Mensaje que dice que se elimino el anime correctamente
   */
const _deleteAnime = async (id) => {
  try {
    await anime.findByIdAndRemove(id);
    return `Anime ${id} eliminado`;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _deleteAnime;
