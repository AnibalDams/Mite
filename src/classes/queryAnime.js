import animeDb from '../schemas/anime.schema.js';
import Anime from './anime.js';

class QueryAnime {
  
  constructor(animeName="", animeId="") {
    this.animeName = animeName;
    this.animeId = animeId;


  }

  async find() {
	try {
		const anime = new Anime()
		anime.setId(this.animeId)
		
      	const _find = await animeDb.findOne({id:anime.id});
      	


      if (_find) {
        await animeDb.findByIdAndUpdate(_find._id, {
          $inc: {
            views: 1,
          },
        });
        return _find;
      } else {
        return {message: 'El anime solicitado no existe.'};
      }
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  
  }


}

export default QueryAnime
