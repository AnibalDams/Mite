import _find from './staticMethods/find.js';
import _findAnime from './staticMethods/findAnime.js';
import _findAnimeByGenre from './staticMethods/findAnimeByGenre.js';

import _findEpisode from './staticMethods/findEpisode.js';
import _findEpisodes from './staticMethods/findEpisodes.js';
import _latestAnimesAdded from './staticMethods/latestAnimesAdded.js';
import _latestEpisodesAdded from './staticMethods/latestEpisodesAdded.js';
import newAnime from './methods/new.js';
import _newEpisode from './staticMethods/newEpisode.js';
import _mostPopularAnime from './staticMethods/mostPopularAnime.js';
import _searchAnime from './staticMethods/search.js';

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
      Private,
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
        this.#private,
    );
    return _new;
  }


  static async find(page, limit) {
    try {
      const _find = await _find(page, limit);
      return _find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async findAnime(animeId) {
    try {
      const find = await _findAnime(animeId);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async findAnimeByGenre(genre) {
    try {
      const find = await _findAnimeByGenre(genre);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async findEpisode(animeId, episode) {
    try {
      const find = await _findEpisode(animeId, episode);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async findEpisodes(animeId) {
    try {
      const find = await _findEpisodes(animeId);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }


  static async latestAnimesAdded() {
    try {
      const latestAdded = _latestAnimesAdded();
      return latestAdded;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async latestEpisodesAdded() {
    try {
      const latestAdded = _latestEpisodesAdded();
      return latestAdded;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async newEpisode(episodeData) {
    try {
      const New = _newEpisode(episodeData);
      return New;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async mostPopularAnime() {
    try {
      const mostPopular = _mostPopularAnime();
      return mostPopular;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  static async search(searchIndex) {
    try {
      const Search = _searchAnime(searchIndex);
      return Search;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}

export default Anime;
