import _addAnimeToList from './staticMethods/addAnimeToList.js';

import _changeAnimeState from './staticMethods/changeAnimeState.js';

import _deleteAnime from './staticMethods/deleteAnime.js';

import _deleteAnimeInList from './staticMethods/deleteAnimeInList.js';

import _find from './staticMethods/find.js';

import _findAnime from './staticMethods/findAnime.js';

import _findAnimesInList from './staticMethods/findAnimesInList.js';
import _findAnimeInList from './staticMethods/findAnimeInList.js';

import _findAnimeByGenre from './staticMethods/findAnimeByGenre.js';

import _findEpisode from './staticMethods/findEpisode.js';

import _findEpisodes from './staticMethods/findEpisodes.js';

import _findGenres from './staticMethods/findGenres.js';

import _latestAnimesAdded from './staticMethods/latestAnimesAdded.js';

import _latestEpisodesAdded from './staticMethods/latestEpisodesAdded.js';

import newAnime from './methods/new.js';

import _newEpisode from './staticMethods/newEpisode.js';

import _mostPopularAnime from './staticMethods/mostPopularAnime.js';

import _searchAnime from './staticMethods/search.js';

/**
 * anime
 * @typedef {object} anime
 * @property {string} message
 * @property {string} id Id generado al instanciar el objeto
 * @property {string} _id Id generado por la base de datos
 * @property {string} name Nombre del anime
 * @property {string} synopsis Sinopsis del anime
 * @property {string} color color relacionado al anime (dato innecesario)
 * @property {string} image Imagen del anime en cuestion, puede ser una captura o algo realizado para el anime (no confundir con el cover)
 * @property {string} cover Cover o poster del anime
 * @property {string} releaseDate Año en el que fue emitido por primera vez
 * @property {string} study Estudio de animación encargado del anime
 * @property {boolean} onGoing Si esta en emisión o no
 * @property {Array<string>} genres Arreglo con los generos del anime
 * @property {string} type Tipo de anime que es, Anime, Anime latino, OVA, Pelicula, etc
 * @property {boolean} private Si es privado o no
 * @property {number} _v Dato que da la base de datos
 */

/**
 * episodio
 * @typedef {object} episodio
 * @property {string} anime ID del anime que contiene el episodio
 * @property {string} animeName nombre del anime que contiene los episodios
 * @property {string} episodeNumber Numero del episodio
 * @property {string} thumbnail Miniatura del episodio
 * @property {string} episodeName Nombre del espisodio
 * @property {Array<{name:string, url:string}>} Servidores donde se alojan los episodios
 */

/**
 * Contiene todo lo relacionado a los animes
 * @example
 * const anime = new Anime(data,data2,data3,...);
 * await anime.newAnime();
 */
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
  /**
 * Datos del constructor de la clase
 * @param {string} name Nombre del anime
 * @param {string} synopsis Sinopsis del anime
 * @param {string} color Color relacionado al anime (dato innsecesario)
 * @param {string} image Imagen relacionada al anime(no confundir con el cover)
 * @param {string} cover Cover o poster del anime
 * @param {string} releaseDate Fecha en la que fue emitido
 * @param {string} study Estudio de animación que estuvo encargado del mismo
 * @param {string} onGoing Esto se refiera a si esta en emisión o no
 * @param {Array<string>} genres Generos a los que pertenece
 * @param {string} type Que tipo de anime es, Anime, Anime latino, OVA,etc
 * @param {boolean} Private Privado o no
 */
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

  static async addAnimeToList(animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile) {
    try {
      const add = await _addAnimeToList(animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile);
      return add;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  /**
   * Crear un nuevo anime con los datos que se ingresaron al instanciar el objeto {@link new}
   * @return {anime} Objeto del anime creado
   */
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
  /**
   * Mira {@link _changeAnimeState} para más información.
   * */
  static async changeAnimeState(animeId) {
    try {
      const change = await _changeAnimeState(animeId);
      return change;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Eliminar un anime a traves de su _id {@link _deleteAnime}
   * @param {string} animeId ID de los animes en la base de datos
   * @return {Promise<string>} Mensaje que dice que se elimino el anime correctamente
   */
  static async deleteAnime(animeId) {
    try {
      const _delete = await _deleteAnime(animeId);
      return _delete;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async deleteAnimeInList(animeId) {
    try {
      const _delete = await _deleteAnimeInList(animeId);
      return _delete;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  /**
   * Mostrar los animes guardados, divididos por paginación {@link _find}
   * @param {number} page Número de la pagina
   * @param {number} limit Limite de animes que se muestra en una pagina
   * @return {Promise<anime[]>} Retorna un array con los animes encontrados
   */
  static async find(page, limit) {
    try {
      const Find = await _find(page, limit);
      return Find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * muestra solo un anime
   * @param {string} animeId Id generado previamente al crear el anime (no usar el de la base de datos sino el generado el servidor)
   * @return {Promise<anime>} retorna el anime en concreto
   */
  static async findAnime(animeId) {
    try {
      const find = await _findAnime(animeId);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Buscar todos los animes de un genero determinado
   * @param {string} genre Genero el cual queremos ver los animes
   * @return {Array<anime>} Retorna una lista con los animes del genero proveido
   */
  static async findAnimeByGenre(genre) {
    try {
      const find = await _findAnimeByGenre(genre);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  /**
   * Busca un episodio en concreto {@link _findEpisode}
   * @param {string} animeId ID del anime que contiene el episodio (id generado)
   * @param {string} episode Número del episodio que queremos mostrar
   * @return {Promise<episodio>} Episodio encontrado en la base de datos
   */
  static async findEpisode(animeId, episode) {
    try {
      const find = await _findEpisode(animeId, episode);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Todos los episodios que tiene un anime {@link _findEpisodes}
   * @param {string} animeId ID del anime del cual queremos ver los episodios
   * @return {Promise<episodio[]>}
   */
  static async findEpisodes(animeId) {
    try {
      const find = await _findEpisodes(animeId);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Muestra todos los generos que existen hasta el momento
   * @return {Array<string>} Arreglo con todos los generos
   */
  static async findGenres() {
    try {
      const find = await _findGenres();
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async findAnimeInList(animeId, userProfile) {
    try {
      const find = await _findAnimeInList(animeId, userProfile);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  static async findAnimesInList(userProfile) {
    try {
      const find = await _findAnimesInList(userProfile);
      return find;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  /**
   * Ultimos animes agregados a la base de datos {@link _latestAnimesAdded}
   * @return {Promise<anime[]>} Lista con los ultimos animes agregados
   */
  static async latestAnimesAdded() {
    try {
      const latestAdded = await _latestAnimesAdded();
      return latestAdded;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Muestra los ultimos episodios agreados sin importar el anime que sea {@link _latestEpisodesAdded}
   * @return {Promise<episodio[]>} Lista con los ultimos episodios agregados
   */
  static async latestEpisodesAdded() {
    try {
      const latestAdded = await _latestEpisodesAdded();
      return latestAdded;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Crear un nuevo episodio {@link _newEpisode}
   * @param {episodio} episodeData datos del episodio que queremos crear
   * @return {Promise<episodio>} Episodio agragado a la base de datos
   */
  static async newEpisode(episodeData) {
    try {
      const New = await _newEpisode(episodeData);
      return New;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }

  /**
   * Mostrar los animes mas populares del momento {@link _mostPopularAnime}
   * @return {Promise<anime[]>} Lista con los animes mas populares
   */
  static async mostPopularAnime() {
    try {
      const mostPopular = await _mostPopularAnime();
      return mostPopular;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
  /**
   * Buscar animes atraves de su nombre {@link _searchAnime}
   * @param {string} searchIndex Nombre del anime que queremos buscar
   * @return {Promise<anime[]>} lista con los animes que coincida con el termino que ingresamos
   * @example
   * const buscarAnime = await Anime.search("One Piece"); // Anime
   */
  static async search(searchIndex) {
    try {
      const Search = await _searchAnime(searchIndex);
      return Search;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}

export default Anime;
