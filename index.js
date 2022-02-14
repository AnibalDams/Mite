import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import dotenv from "dotenv";
import connect from "./src/controllers/database.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//graphQl Queries and mutations imports

import newuser from "./src/mutations/newUser.js";
import newanime from "./src/mutations/newAnime.js";
import Login from './src/queries/login.js'


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

  type Query {
    login(username:String!, password:String!): String
  }
  type Mutation {
    newUser(username: String!, password:String!, admin:Boolean): user
    newAnime( name:String! synopsis:String! image:String! cover:String! releaseDate:String! study:String! onGoing:Boolean! genres:[String]! type:String! Private:Boolean!) : anime
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
