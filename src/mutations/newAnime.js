import Anime from "../classes/anime/index.js";

const newAnime = async (
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
) => {
  const anime = new Anime(
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
  const _new = await anime.newAnime();

  return _new;
};
export default newAnime;
