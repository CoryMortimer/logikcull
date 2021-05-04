import { useGetAlbums } from "./resources/album";
import { DataGrid } from "ui/DataGrid";
import { makeStyles } from "ui/styles";

const useStyles = makeStyles({
  fullHeight: { height: "100vh" },
});

const Albums = () => {
  const { fullHeight } = useStyles();
  const { response, isLoading } = useGetAlbums();

  const columns = [
    { field: "albumTitle", headerName: "Title", width: 300 },
    { field: "artistName", headerName: "Artist Name", width: 300 },
    { field: "year", headerName: "Year", width: 300 },
    { field: "condition", headerName: "Condition", width: 300 },
  ];

  const rows = response.results.map(({ artist: { name }, ...rest }, i) => ({
    artistName: name,
    id: i,
    ...rest,
  }));

  return (
    <div className={fullHeight}>
      <DataGrid
        loading={isLoading}
        rows={rows}
        pageSize={rows.length}
        rowsPerPageOptions={[rows.length]}
        columns={columns}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Albums;
