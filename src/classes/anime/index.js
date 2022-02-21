import Find from './staticMethods/find.js'
import FindAnime from "./staticMethods/findAnime.js";
import FindEpisode from "./staticMethods/findEpisode.js";
import FindEpisodes from "./staticMethods/findEpisodes.js";
import newAnime from "./methods/new.js";
import NewEpisode from "./staticMethods/newEpisode.js";
import SearchAnime from "./staticMethods/search.js";



class Anime {
  #name;
  #synopsis;
  #color;
  #image;
  #cover;
  #releaseDate;
  #study;
  #onGoing;
  #genres;
  #type;
  #private;

  constructor(
    name,
    synopsis,
    color,
    image,
    cover,
    releaseDate,
    study,
    onGoing,
    genres,
    type,
    Private
  ) {
    this.#name = name;
    this.#synopsis = synopsis;
    this.#color = color;
    this.#image = image;
    this.#cover = cover;
    this.#releaseDate = releaseDate;
    this.#study = study;
    this.#onGoing = onGoing;
    this.#genres = genres;
    this.#type = type;
    this.#private = Private;
  }

  async newAnime() {
    const _new = newAnime(
      this.#name,
      this.#synopsis,
      this.#color,
      this.#image,
      this.#cover,
      this.#releaseDate,
      this.#study,
      this.#onGoing,
      this.#genres,
      this.#type,
      this.#private
    );
    return _new;
  }
  static async find(page,limit) {
    try {
      const _find = await Find(page,limit);
      return _find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async findAnime(animeId) {
    try {
      const find = await FindAnime(animeId);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async findEpisode(animeId,episode) {
    try {
      const find = await FindEpisode(animeId,episode);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async findEpisodes(animeId) {
    try {
      const find = await FindEpisodes(animeId);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async newEpisode(episodeData) {
    try {
      const New = NewEpisode(episodeData);
      return New;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async search(searchIndex) {
    try {
      const Search = SearchAnime(searchIndex);
      return Search;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

}

export default Anime;
