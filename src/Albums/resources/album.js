import Http, { useHttpQuery, queryClient } from "utils/http";
import { Artist } from "Artists";
import * as z from "zod";

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

export const updateAlbum = (recordValues, url) => {
  console.log("logic to edit", recordValues);
};

export const addNewAlbum = (
  { albumTitle, year, artistName, condition },
  url
) => {
  queryClient.setQueryData(["albums", url], (oldData) => {
    return {
      ...oldData,
      data: {
        ...oldData.data,
        results: [
          ...oldData.data.results,
          {
            year: +year,
            album_title: albumTitle,
            condition,
            artist: { name: artistName, id: Math.floor(Math.random * 10000) },
          },
        ],
      },
    };
  });
};

export default class Album {
  constructor({ album_title, year, condition, artist } = {}) {
    this.albumTitle = album_title;
    this.year = year;
    this.condition = condition;
    this.artist = new Artist(artist);
  }
}

export const AlbumValidation = z.object({
  albumTitle: z.string(),
  condition: z.union([
    z.literal("poor"),
    z.literal("good"),
    z.literal("very_good"),
    z.literal("fair"),
    z.literal("mint"),
  ]),
  artistName: z.string(),
  year: z.string(),
});
