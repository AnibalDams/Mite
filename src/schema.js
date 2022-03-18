import {buildSchema} from 'graphql';

import animeType from './types/anime.js';
import genresType from './types/genres.js';
import episodeType from './types/episodes.js';
import episodeServerType from './types/episodeServer.js';
import episodeServerInput from './types/episodeServerInput.js';
import query from './types/query.js';
import mutation from './types/mutation.js';
import animeAndGenre from './types/animeAndGenre.js';

const schema = buildSchema(`

  ${animeAndGenre}
  ${animeType}
  ${genresType}
  ${episodeType}
  ${episodeServerType}
  ${episodeServerInput}
  ${query}
  ${mutation}  
  
  
`);

export default schema;
