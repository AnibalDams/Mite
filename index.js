import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import dotenv from "dotenv";
import connect from "./src/controllers/database.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//graphQl Queries and mutations imports

import FindAnime from "./src/queries/findAnime.js";
import Login from "./src/queries/login.js";
import newanime from "./src/mutations/newAnime.js";
import newuser from "./src/mutations/newUser.js";
import Search from "./src/queries/search.js";
import NewEpisode from "./src/mutations/newEpisode.js";

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
    _v:Int
  }
  input episodeServerInput{
    name:String
    url:String
  }
  type episodeServer{
    name:String
    url:String
  }
  type episode {
    message:String
    anime:String
    episodeNumber:Int
    episodeName:String
    servers:[episodeServer]
  }
  type Query {
    login(username:String!, password:String!): String
    findAnime(animeID:Int!) : anime
    search(anime:String!): [anime]
  }
  type Mutation {
    newUser(username: String!, password:String!, admin:Boolean): user
    newAnime( name:String! synopsis:String! color:String! image:String! cover:String! releaseDate:String! study:String! onGoing:Boolean! genres:[String]! type:String! Private:Boolean!) : anime
    newEpisode(anime:String!, episodeNumber:Int!, episodeName:String, servers:[episodeServerInput]):episode
  }
  
`);

// The root provides a resolver function for each API endpoint
var root = {
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
  login: async ({ username, password }) => {
    const res = await Login(username, password);
    return res;
  },
  findAnime: async ({ animeID }) => FindAnime(animeID),
  search: async ({ anime }) => Search(anime),
  newEpisode: async ({ anime, episodeNumber, episodeName, servers }) =>
    NewEpisode(anime, episodeNumber, episodeName, servers),
};

var app = express();

// middlewares

app.use(cors());
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
