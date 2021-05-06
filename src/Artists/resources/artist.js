import { queryClient } from "utils/http";

export default class Artist {
  constructor({ name, id } = {}) {
    this.name = name;
    this.id = id;
  }
}

export const updateArtist = (id, name) => {
  const albumQueries = queryClient.getQueryCache().findAll("albums");
  albumQueries.forEach((query) => {
    queryClient.setQueryData(query.queryKey, (oldData) => {
      return {
        ...oldData,
        data: {
          ...oldData.data,
          results: oldData.data.results.map((album) => {
            if (album.artist.id === id) {
              return { ...album, artist: { id, name } };
            }
            return album;
          }),
        },
      };
    });
  });
};
