import newAnime from "./methods/new.js";
import FindAnime from "./staticMethods/findAnime.js";
import SearchAnime from "./staticMethods/search.js";

class Anime {
  #name;
  #synopsis;
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
  static async findAnime(animeId) {
    try {
      const find = await FindAnime(animeId);
      return find;
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
