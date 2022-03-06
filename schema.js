import {buildSchema} from 'graphql';

const schema = buildSchema(`
  type genres{
    genre:String
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
    findGenres:[genres]
    latestAnimesAdded:[anime]
    latestEpisodesAdded:[episode]
    mostPopularAnime: [anime]
    search(anime:String!): [anime]
    totalPagination(animesPerPage:Int!):Int
  }
  type Mutation {
    deleteAnime(animeId:String!) : String


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


export default schema;
