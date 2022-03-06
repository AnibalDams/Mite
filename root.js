// graphQl Queries and mutations imports.

import _findAll from './src/queries/findAll.js';
import _findAnime from './src/queries/findAnime.js';
import _findAnimeByGenre from './src/queries/findAnimeByGenre.js';
import _findEpisode from './src/queries/findEpisode.js';
import _findEpisodes from './src/queries/findEpisodes.js';
import _findGenres from './src/queries/findGenres.js';
import _latestAnimesAdded from './src/queries/latestAnimesAdded.js';
import _latestEpisodesAdded from './src/queries/latestEpisodesAdded.js';
import newanime from './src/mutations/newAnime.js';

import _search from './src/queries/search.js';
import _newEpisode from './src/mutations/newEpisode.js';
import _mostPopularAnime from './src/queries/mostPopularAnime.js';

// other

import anime from './src/schemas/anime.schema.js';


// The root provides a resolver function for each API endpoint
const root = {
  findAll: ({page, limit}) => _findAll(page, limit),
  findAnime: ({animeID}) => _findAnime(animeID),
  findAnimeByGenre: ({genre}) => _findAnimeByGenre(genre),
  findEpisode: ({animeID, episode}) => _findEpisode(animeID, episode),
  findEpisodes: ({animeID}) => _findEpisodes(animeID),
  findGenres: () => _findGenres(),
  findUser: ({username}) => _findUser(username),
  latestAnimesAdded: ()=> _latestAnimesAdded(),
  latestEpisodesAdded: ()=> _latestEpisodesAdded(),
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
  }) => {
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
  },
  mostPopularAnime: async () => await _mostPopularAnime(),
  search: async ({anime}) => _search(anime),
  newEpisode: async ({
    anime,
    episodeNumber,
    thumbnail,
    episodeName,
    servers,
  }) => _newEpisode(anime, episodeNumber, thumbnail, episodeName, servers),
  totalPagination: async ({animesPerPage}) => {
    const animes = await anime.find();

    return Math.floor(animes.length / animesPerPage);
  },
};


export default root;
