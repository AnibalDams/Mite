export default `

	type Mutation {
		      changeAnimeState(animeId:String!,secretKey:String!):String
		    deleteAnime(animeId:String!,secretKey:String!) : String
		    login(username:String!,password:String!) : String

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
		      newProfile(name:String!, avatar:String!, user:String!):String
		      newUser(username:String!, password:String!):String
		    

		      
		  }

`;
