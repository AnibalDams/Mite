import {buildSchema} from 'graphql';

import animeAndGenre from './types/animeAndGenre.js';
import animeList from './types/animeList.js';
import animeType from './types/anime.js';
import episodeType from './types/episodes.js';
import episodeServerType from './types/episodeServer.js';
import episodeServerInput from './types/episodeServerInput.js';
import characters from './types/characters.js';
import charactersInput from './types/charactersInput.js';
import genresType from './types/genres.js';
import mutation from './types/mutation.js';
import query from './types/query.js';
import userType from './types/user.js';

import userProfileType from './types/userProfile.js';


const schema = buildSchema(`

  ${animeAndGenre}
  
  ${animeList}

  ${animeType}
  
  ${genresType}
  
  ${episodeType}
  
  ${episodeServerType}
  
  ${episodeServerInput}

  ${charactersInput}

  ${characters}
  
  ${userType}
  
  ${userProfileType}
  
  ${mutation}  
  ${query}
  
  
`);

export default schema;
