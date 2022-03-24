export default `

	type Mutation {
		    deleteAnime(animeId:String!,secretKey:String!) : String


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
		      Private:Boolean!
		      secretKey:String
		      ) : anime
		      
		    newEpisode(
		      anime:String!, 
		      episodeNumber:Int!,
		      thumbnail:String!, 
		      episodeName:String, 
		      servers:[episodeServerInput]
		      secretKey:String
		      ):episode
		      changeAnimeState(animeId:String!,secretKey:String!):String
		    

		      
		  }

`;
