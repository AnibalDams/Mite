import newAnime from "./methods/new.js";

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
}

export default Anime;
