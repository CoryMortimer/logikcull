import { useState } from "react";
import { useGetAlbums } from "./resources/album";
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";
import { DataGrid } from "ui/DataGrid";
import { makeStyles } from "ui/styles";
import { UpdateArtist } from "Artists";

const firstPageOfAlbums =
  "https://gist.githubusercontent.com/seanders/df38a92ffc4e8c56962e51b6e96e188f/raw/b032669142b7b57ede3496dffee5b7c16b8071e1/page1.json";

const useStyles = makeStyles({
  fullHeight: { height: "100vh" },
});

const columns = [
  { field: "albumTitle", headerName: "Title", width: 300 },
  { field: "artistName", headerName: "Artist Name", width: 300 },
  { field: "year", headerName: "Year", width: 100 },
  { field: "condition", headerName: "Condition", width: 200 },
];

const Albums = () => {
  const [pageUrl, setPageUrl] = useState(firstPageOfAlbums);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [initialEditValues, setInitialEditValues] = useState();
  const [initialEditArtistValues, setInitialEditArtistValues] = useState();
  const [isEditArtistOpen, setIsEditArtistOpen] = useState(false);
  const { fullHeight } = useStyles();
  const { response, isLoading } = useGetAlbums(pageUrl);

  const rows = response.results.map(
    ({ artist: { name, id: artistId }, ...rest }, i) => ({
      artistName: name,
      artistId,
      id: i,
      ...rest,
    })
  );

  return (
    <>
      <div className={fullHeight}>
        <DataGrid
          loading={isLoading}
          rows={rows}
          pageSize={rows.length}
          rowsPerPageOptions={[rows.length]}
          columns={columns}
          rowCount={50}
          disableSelectionOnClick
          paginationMode="server"
          onCellClick={(cellParams) => {
            if (cellParams.colDef.field !== "artistName") {
              setIsEditOpen(true);
              const {
                id,
                albumTitle,
                artistName,
                condition,
                year,
              } = cellParams.row;
              setInitialEditValues({
                id,
                albumTitle,
                artistName,
                condition,
                year: `${year}`,
              });
            } else {
              const { artistName, artistId: id } = cellParams.row;
              setIsEditArtistOpen(true);
              setInitialEditArtistValues({ artistName, id });
            }
          }}
          onPageChange={({ page }) => {
            if (page === 1) {
              setPageUrl(response.nextPage);
            } else {
              setPageUrl(firstPageOfAlbums);
            }
          }}
        />
      </div>
      <AddAlbum page={pageUrl} />
      <UpdateAlbum
        page={pageUrl}
        isDialogOpen={isEditOpen}
        initialValues={initialEditValues}
        handleClose={() => {
          setIsEditOpen(false);
          setInitialEditValues(null);
        }}
      />
      <UpdateArtist
        initialValues={initialEditArtistValues}
        isDialogOpen={isEditArtistOpen}
        handleClose={() => {
          setIsEditArtistOpen(false);
          setInitialEditArtistValues(null);
        }}
      />
    </>
  );
};

export default Albums;
