class Anime {
	constructor(){
		this.id = ""
		this.name=""
		this.synopsis=""
		this.image=""
		this.cover=""
		this.releaseDate=""
		this.study=""
		this.characters=[]
		this.onGoing=false
		this.genres=[]
		this.type=""
		this.Private=""
		 

	}
	setId(id){
		this.id = id 
		return this
	}
	setName(name){
		this.name = name 
		return this
	}
	setSynopsis(synopsis) {
		this.synopsis = synopsis
		return this 
	}
	setImage(image){
		this.image = image
		return this 
	}
	setCover(cover){
		this.cover = cover 
		return this

	}
	setReleaseDate(releaseDate){
		this.releaseDate = releaseDate 
		return this

	}
	setStudy(study){
		this.study = study 
		return this
	}
	setCharacters(characters) {
		this.characters = characters
		return this 
	}
	setOnGoing(onGoing) {
		this.onGoing = onGoing
		return this
	}

	setGenres(genres) {
		this.genres = genres 
		return this
	}
	setType(type) {
		this.type = type 
		return this
	}
	setPrivate(private) {
		this.private = private 
		return this
	}

}