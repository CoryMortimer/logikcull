import Http, { useHttpQuery } from "utils/http";
import { Artist } from "Artists";

const getAlbums = (url) => {
  return Http.get(url);
};

export const useGetAlbums = (url) => {
  const {
    response: { results, ...restResponse } = { results: [] },
    ...rest
  } = useHttpQuery(["albums", url], () => getAlbums(url), {
    keepPreviousData: true,
  });

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
