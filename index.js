import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';
import dotenv from 'dotenv';
import connect from './src/controllers/database.js';
// import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

// graphQl Queries and mutations imports

import _findAll from './src/queries/findAll.js';
import _findAnime from './src/queries/findAnime.js';
import _findAnimeByGenre from './src/queries/findAnimeByGenre.js';
import _findEpisode from './src/queries/findEpisode.js';
import _findEpisodes from './src/queries/findEpisodes.js';
import _latestAnimesAdded from './src/queries/latestAnimesAdded.js';
import _latestEpisodesAdded from './src/queries/latestEpisodesAdded.js';
import _login from './src/queries/login.js';
import newanime from './src/mutations/newAnime.js';
import newuser from './src/mutations/newUser.js';
import _search from './src/queries/search.js';
import _newEpisode from './src/mutations/newEpisode.js';
import _mostPopularAnime from './src/queries/mostPopularAnime.js';

// other

import anime from './src/schemas/anime.schema.js';

// initializations


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schema = buildSchema(`
  type user {
    message:String
    _id:ID
    username:String
    password:String
    avatar:String
    createdAt:String
    admin:Boolean
    _v:Int
  }
  type anime {
    message:String
    id:Int
    _id:ID
    name:String
    synopsis:String
    image:String
    cover:String
    releaseDate:String
    study:String
    onGoing:Boolean
    genres:[String]
    type:String
    private:Boolean
    views:Int
    _v:Int
  }
  type episodeServer{
    name:String
    url:String
  }
  type episode {
    message:String
    anime:Int
    episodeNumber:Int
    thumbnail:String
    episodeName:String
    servers:[episodeServer]
    uploadedAt:String
  }
  input episodeServerInput{
    name:String
    url:String
  }
  type Query {
    findAll(page:Int!, limit:Int!):[anime]
    findAnime(animeID:Int!) : anime
    findAnimeByGenre(genre:String!):[anime]
    findEpisode(animeID:Int!, episode:Int!):episode
    findEpisodes(animeID:Int!):[episode]
    latestAnimesAdded:[anime]
    latestEpisodesAdded:[episode]
    login(username:String!, password:String!): String
    mostPopularAnime: [anime]
    search(anime:String!): [anime]
    totalPagination(animesPerPage:Int!):Int
  }
  type Mutation {
    newUser(username: String!, password:String!, admin:Boolean): user
    newAnime( 
      name:String!, 
      synopsis:String!, 
      color:String!, 
      image:String!, 
      cover:String!, 
      releaseDate:String!, 
      study:String!, 
      onGoing:Boolean!, 
      genres:[String]!, 
      type:String!, 
      Private:Boolean!) : anime
    newEpisode(
      anime:Int!, 
      episodeNumber:Int!,
      thumbnail:String!, 
      episodeName:String, 
      servers:[episodeServerInput]):episode
  }
  
`);

// The root provides a resolver function for each API endpoint
const root = {
  findAll: ({page, limit}) => _findAll(page, limit),
  findAnime: ({animeID}) => _findAnime(animeID),
  findAnimeByGenre: ({genre}) => _findAnimeByGenre(genre),
  findEpisode: ({animeID, episode}) => _findEpisode(animeID, episode),
  findEpisodes: ({animeID}) => _findEpisodes(animeID),
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

const app = express();

// middlewares

// app.use(cors());

/* app.use('*', (req, res, next) => {
  console.log(req.headers.origin);
  if (req.headers.origin !== 'http://localhost:4000') {
    console.log(`ajfodsfd ${req.headers.origin}`);
  } else {
    console.log('hola');
  }
  next();
});*/
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, '/src/public/img')));
app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: root,

      graphiql: true,
    }),
);

// server
connect(process.env.MONGO_URI);

app.listen(4000);
console.log('server running on localhost:4000');
