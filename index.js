import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import dotenv from "dotenv";
import connect from "./src/controllers/database.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//graphQl Queries and mutations imports

import FindAll from "./src/queries/findAll.js";
import FindAnime from "./src/queries/findAnime.js";
import FindAnimeByGenre from "./src/queries/findAnimeByGenre.js";
import FindEpisode from "./src/queries/findEpisode.js";
import FindEpisodes from "./src/queries/findEpisodes.js";
import Login from "./src/queries/login.js";
import newanime from "./src/mutations/newAnime.js";
import newuser from "./src/mutations/newUser.js";
import Search from "./src/queries/search.js";
import NewEpisode from "./src/mutations/newEpisode.js";
import MostPopularAnime from "./src/queries/mostPopularAnime.js";

// other

import anime from "./src/schemas/anime.schema.js";

// initializations

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var schema = buildSchema(`
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
    login(username:String!, password:String!): String
    mostPopularAnime: [anime]
    search(anime:String!): [anime]
    totalPagination(animesPerPage:Int!):Int
  }
  type Mutation {
    newUser(username: String!, password:String!, admin:Boolean): user
    newAnime( name:String! synopsis:String! color:String! image:String! cover:String! releaseDate:String! study:String! onGoing:Boolean! genres:[String]! type:String! Private:Boolean!) : anime
    newEpisode(anime:Int!, episodeNumber:Int!,thumbnail:String!, episodeName:String, servers:[episodeServerInput]):episode
  }
  
`);

// The root provides a resolver function for each API endpoint
var root = {
  findAll: async ({ page, limit }) => FindAll(page, limit),
  findAnime: async ({ animeID }) => FindAnime(animeID),
  findAnimeByGenre: async ({ genre }) => FindAnimeByGenre(genre),
  findEpisode: async ({ animeID, episode }) => FindEpisode(animeID, episode),
  findEpisodes: async ({ animeID }) => FindEpisodes(animeID),
  login: async ({ username, password }) => {
    const res = await Login(username, password);
    return res;
  },

  newUser: async ({ username, password, admin }) => {
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
      Private
    );
    return New;
  },
  mostPopularAnime: async () => await MostPopularAnime(),
  search: async ({ anime }) => Search(anime),
  newEpisode: async ({
    anime,
    episodeNumber,
    thumbnail,
    episodeName,
    servers,
  }) => NewEpisode(anime, episodeNumber, thumbnail, episodeName, servers),
  totalPagination: async ({ animesPerPage }) => {
    const animes = await anime.find();

    return Math.floor(animes.length / animesPerPage);
  },
};

var app = express();

// middlewares

app.use(cors());
app.use("*", (req, res, next) => {
  console.log(req.headers.origin);
  if (req.headers.origin !== "http://localhost:4000") {
    console.log(`ajfodsfd ${req.headers.origin}`);
  } else {
    console.log("hola");
  }
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/img", express.static(path.join(__dirname, "/src/public/img")));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,

    graphiql: true,
  })
);

// server
connect(process.env.MONGO_URI);

app.listen(4000);
console.log("server running on localhost:4000");
