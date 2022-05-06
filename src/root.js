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
import _addAnimeToList from './mutations/addAnimeToList.js';

import _changeAnimeState from './mutations/changeAnimeState.js';

import _deleteAnime from './mutations/deleteAnime.js';

import _deleteAnimeInList from './mutations/deleteAnimeInList.js';

import _deleteUserProfile from './mutations/deleteUserProfile.js';

import _editUserProfile from './mutations/editUserProfile.js';

import _findAll from './queries/findAll.js';

import _findAllProfiles from './queries/findAllProfiles.js';

import findAnime from './methods/findAnime.js';

import _findAnimeByGenre from './queries/findAnimeByGenre.js';

import _findEpisode from './queries/findEpisode.js';

import _findEpisodes from './queries/findEpisodes.js';

import _findGenres from './queries/findGenres.js';

import _findAnimeInList from './queries/findAnimeInList.js';
import _findAnimesInList from './queries/findAnimesInList.js';

import _latestAnimesAdded from './queries/latestAnimesAdded.js';

import _latestEpisodesAdded from './queries/latestEpisodesAdded.js';
import _login from './mutations/login.js';

import newanime from './mutations/newAnime.js';

import _search from './queries/search.js';
import _selectUserProfile from './queries/selectUserProfile.js';

import _newEpisode from './mutations/newEpisode.js';
import _newProfile from './mutations/newProfile.js';
import _newUser from './mutations/newUser.js';

import _mostPopularAnime from './queries/mostPopularAnime.js';

// other

import anime from './schemas/anime.schema.js';
import genre from './schemas/genres.schema.js';
import random from './libs/randomNumberInRange.js';

// The root provides a resolver function for each API endpoint
/**
   * Objeto que contiene todas las funciones de las queries y las mutations.
   * @type {QueriesAndMutations}
   */
const root = {
  addAnimeToList: async ({animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile})=>{
    const add = await _addAnimeToList(animeId, animeName, animeSynopsis, animeMain, animeCover, userProfile);
    return add;
  },
  animeAndGenreRandom: async ()=>{
    const generos = await genre.find();
    const numeroRandom = random(0, generos.length);
    const genero = generos[numeroRandom];
    const animes = await _findAnimeByGenre(genero.genre);
    return {
      genre: genero.genre,
      animes,
    };
  },
  animeRandom: async ()=>{
    const animes = await anime.find();
    const numeroRandom = random(0, animes.length);
    return animes[numeroRandom];
  },
  changeAnimeState: async ({animeId, secretKey}) => {
    if (secretKey === process.env.SERCRETKEY) {
      await _changeAnimeState(animeId);
    } else {
      return '';
    }
  },

  deleteAnime: async ({animeId, secretKey}) =>{
    if (secretKey === process.env.SERCRETKEY) {
      const _delete = await _deleteAnime(animeId);
      return _delete;
    } else {
      return '';
    }
  },

  deleteAnimeInList: async ({animeId, secretKey}) =>{
    if (secretKey === process.env.SERCRETKEY) {
      const _delete = await _deleteAnimeInList(animeId);
      return _delete;
    } else {
      return '';
    }
  },
  deleteUserProfile: async ({profileId})=>await _deleteUserProfile(profileId),

  editUserProfile: async ({profileId, profileName, profileAvatar})=>await _editUserProfile(profileId, profileName, profileAvatar),

  findAll: async ({page, limit}) => await _findAll(page, limit),

  findAllProfiles: async ({user}) => await _findAllProfiles(user),

  findAnime,

  findAnimeByGenre: async ({genre}) => await _findAnimeByGenre(genre),

  findEpisode: async ({animeID, episode}) =>
    await _findEpisode(animeID, episode),
  findEpisodes: async ({animeID}) => await _findEpisodes(animeID),
  findGenres: async () => await _findGenres(),

  findAnimeInList: async ({animeId, userProfile})=> {
    const find = await _findAnimeInList(animeId, userProfile);
    return find;
  },
  findAnimesInList: async ({userProfile})=> {
    const find = await _findAnimesInList(userProfile);
    return find;
  },

  findUser: async ({username}) => await _findUser(username),
  latestAnimesAdded: async () => await _latestAnimesAdded(),
  latestEpisodesAdded: async () => await _latestEpisodesAdded(),
  login: async ({username, password}) => {
    const res = await _login(username, password);
    return res;
  },

  mostPopularAnime: async () => await _mostPopularAnime(),
  newProfile: async ({name, avatar, user})=> await _newProfile(name, avatar, user),
  newUser: async ({username, password}) => {
    const _new = await _newUser(username, password);
    return _new;
  },
  newAnime: async ({
    name,
    synopsis,
    image,
    cover,
    releaseDate,
    study,
    characters,
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
          image,
          cover,
          releaseDate,
          study,
          characters,
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
  search: async ({anime}) => _search(anime),
  selectUserProfile: async ({id}) => _selectUserProfile(id),
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
