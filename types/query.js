export default `
		type Query {
		    findAll(page:Int!, limit:Int!):[anime]
		    findAnime(animeID:String!) : anime
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
`