import Http, { useHttpQuery } from "utils/http";
import { Artist } from "Artists";

const getAlbums = () => {
  return Http.get(
    "https://gist.githubusercontent.com/seanders/df38a92ffc4e8c56962e51b6e96e188f/raw/b032669142b7b57ede3496dffee5b7c16b8071e1/page1.json"
  );
};

export const useGetAlbums = () => {
  const {
    response: { results, ...restResponse } = { results: [] },
    ...rest
  } = useHttpQuery("albums", getAlbums);

  return {
    response: {
      results: results.map((album) => new Album(album)),
      ...restResponse,
    },
    ...rest,
  };
};

export default class Album {
  constructor({ album_title, year, condition, artist } = {}) {
    this.albumTitle = album_title;
    this.year = year;
    this.condition = condition;
    this.artist = new Artist(artist);
  }
}
