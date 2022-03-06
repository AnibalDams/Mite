import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import connect from './src/controllers/database.js';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
import schema from './schema.js';
import root from './root.js';

// initializations


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 4000;


const app = express();

// middlewares

app.use(cors());

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

connect(process.env.MONGO_URI);
// connect('mongodb://localhost/animTest30');

// server
app.listen(port);
console.info('server running on localhost:4000');
