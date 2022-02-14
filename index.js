import express  from 'express';
import { graphqlHTTP } from'express-graphql';
import { buildSchema } from'graphql';
import dotenv from 'dotenv'
import connect from "./src/controllers/database.js";
import cors from 'cors'


//graphQl Queries and mutations imports 

import newUser from './src/mutations/newUser.js'

dotenv.config()

var schema = buildSchema(`
  type user {
    _id:ID!
    username:String!
    password:String!
    avatar:String!
    createdAt:String!
    _v:Int!
  }
  type Query {
    hello: String
  }
  type Mutation {
    newUser(username: String!, password:String!): user
  }
  
`);



// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  newUser:({username,password})=>newUser(username,password),
};

var app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use("/img", express.static(__dirname + "/public/img"));
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  
  graphiql: true,
}));
connect(process.env.MONGO_URI)

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');