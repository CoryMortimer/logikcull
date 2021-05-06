import { useState } from "react";
import { useGetAlbums } from "./resources/album";
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";
import { DataGrid } from "ui/DataGrid";
import { makeStyles } from "ui/styles";

const firstPageOfAlbums =
  "https://gist.githubusercontent.com/seanders/df38a92ffc4e8c56962e51b6e96e188f/raw/b032669142b7b57ede3496dffee5b7c16b8071e1/page1.json";

const useStyles = makeStyles({
  fullHeight: { height: "100vh" },
});

const columns = [
  { field: "albumTitle", headerName: "Title", width: 300 },
  { field: "artistName", headerName: "Artist Name", width: 300 },
  { field: "year", headerName: "Year", width: 300 },
  { field: "condition", headerName: "Condition", width: 300 },
];

const Albums = () => {
  const [pageUrl, setPageUrl] = useState(firstPageOfAlbums);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [initialEditValues, setInitialEditValues] = useState();
  const { fullHeight } = useStyles();
  const { response, isLoading } = useGetAlbums(pageUrl);

  const rows = response.results.map(({ artist: { name }, ...rest }, i) => ({
    artistName: name,
    id: i,
    ...rest,
  }));

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
          onCellClick={(cellParams, b) => {
            if (cellParams.colDef.field !== "artistName") {
              setIsEditOpen(true);
              const {
                albumTitle,
                artistName,
                condition,
                year,
              } = cellParams.row;
              setInitialEditValues({
                albumTitle,
                artistName,
                condition,
                year: `${year}`,
              });
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
    </>
  );
};

export default Albums;
