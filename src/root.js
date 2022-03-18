/**
 * Todas las funciones que ejecutan las queries y muatations que hay en la API de Graphql
 * @module GraphQlQueriesAndMutations 
 */


/**
  * QueriesAndMutations
  * @typedef {object} QueriesAndMutations 
  * @property {Promise<string>} deleteAnime Elimina un anime atraves de su _id. Mira {@link Anime.deleteAnime} para mas informacion
  */

// graphQl Queries and mutations imports.

import _deleteAnime from './mutations/deleteAnime.js';

import _findAll from './queries/findAll.js';

import _findAnime from './queries/findAnime.js';

import _findAnimeByGenre from './queries/findAnimeByGenre.js';

import _findEpisode from './queries/findEpisode.js';

import _findEpisodes from './queries/findEpisodes.js';

import _findGenres from './queries/findGenres.js';

import _latestAnimesAdded from './queries/latestAnimesAdded.js';

import _latestEpisodesAdded from './queries/latestEpisodesAdded.js';

import newanime from './mutations/newAnime.js';

import _search from './queries/search.js';

import _newEpisode from './mutations/newEpisode.js';

import _mostPopularAnime from './queries/mostPopularAnime.js';

// other

import anime from './schemas/anime.schema.js';
import genre from './schemas/genres.schema.js'
import random from './libs/randomNumberInRange.js'

// The root provides a resolver function for each API endpoint
/**
   * Objeto que contiene todas las funciones de las queries y las mutations.
   * @type {QueriesAndMutations} 
   */
const root = {
  animeAndGenreRandom:async()=>{
    const generos = await genre.find()
    const numeroRandom = random(0,generos.length)
    const genero = generos[numeroRandom]
    const animes = await _findAnimeByGenre(genero.genre)
    return {
      genre:genero.genre,
      animes
    }

  },
  animeRandom: async ()=>{
    const animes = await anime.find()
    const numeroRandom = random(0,animes.length)
    return animes[numeroRandom]
  },
  deleteAnime: async ({animeId}) => await _deleteAnime(animeId),
  
  findAll: async ({page, limit}) => await _findAll(page, limit),
  
  findAnime: async ({animeID}) => await _findAnime(animeID),
  
  findAnimeByGenre: async ({genre}) => await _findAnimeByGenre(genre),
  
  findEpisode: async ({animeID, episode}) =>
    await _findEpisode(animeID, episode),
  findEpisodes: async ({animeID}) => await _findEpisodes(animeID),
  findGenres: async () => await _findGenres(),
  findUser: async ({username}) => await _findUser(username),
  latestAnimesAdded: async () => await _latestAnimesAdded(),
  latestEpisodesAdded: async () => await _latestEpisodesAdded(),
  login: async ({username, password}) => {
    const res = await _login(username, password);
    return res;
  },

  newUser: async ({username, password, admin}) => {
    const res = await newuser(username, password, admin);
    return res;
  },
  newAnime: async ({
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
    secretKey,
  }) => {
    if (secretKey === process.env.SERCRETKEY) {
      const New = await newanime(
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
      );
      return New;
    } else {
      return null;
    }
  },
  mostPopularAnime: async () => await _mostPopularAnime(),
  search: async ({anime}) => _search(anime),
  newEpisode: async ({
    anime,
    episodeNumber,
    thumbnail,
    episodeName,
    servers,
    secretKey,
  }) => {
    if (secretKey === process.env.SERCRETKEY) {
      const _new = await _newEpisode(
          anime,
          episodeNumber,
          thumbnail,
          episodeName,
          servers,
      );
      console.log(_new);
      return _new;
    } else {
      return null;
    }
  },
  totalPagination: async ({animesPerPage}) => {
    const animes = await anime.find();

    return Math.floor(animes.length / animesPerPage);
  },

};

export default root;
