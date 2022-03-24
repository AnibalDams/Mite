import Genre from '../../../schemas/genres.schema.js';

/**
   * Muestra todos los generos que existen hasta el momento
   * @return {Array<string>} Arreglo con todos los generos
   */


const _findGenres = async () => {
  try {
    const find = await Genre.find();
    return find;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export default _findGenres;
