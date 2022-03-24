import anime from '../../../schemas/anime.schema.js';

/**
 * Cambia el estado de un anime en emision a terminado
 * @param {string} animeId ID del anime que queremos cambiar (id de la base de datos)
 * @return {Promise<string>} mensaje cuando finaliza el proceso
 * */
async function _changeAnimeState(animeId) {
  try {
    await anime.findByIdAndUpdate(animeId, {onGoing: false});
    return `anime ${animeId} cambiado a finalizado`;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}


export default _changeAnimeState;
