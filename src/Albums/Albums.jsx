import { useGetAlbums } from "./resources/album";
import Album from "./Album";
import Grid from "ui/Grid";

const Albums = () => {
  const { response } = useGetAlbums();

  return (
    <Grid container spacing={2}>
      {response.results.map(({ albumTitle, artist, condition, year }) => (
        <Grid item xs={12} key={`${albumTitle}${artist.name}${year}`}>
          <Album
            albumTitle={albumTitle}
            artist={artist}
            condition={condition}
            year={year}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Albums;
