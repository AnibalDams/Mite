import anime from '../../../schemas/anime.schema.js';

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

async function search(searchIndex) {
  try {
    const regex = new RegExp(escapeRegex(searchIndex), 'gi');
    const _animes = await anime.find({name: regex});

    if (_animes.length === 0) {
      return [{message: 'No se encontro nungun anime.'}];
    } else {
      return _animes;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export default search;
