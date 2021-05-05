import MaterialFab from "@material-ui/core/Fab";
import AddIcon from "./icons/Add";
import { makeStyles } from "./styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const Fab = (props) => {
  const { fab } = useStyles();
  return (
    <MaterialFab aria-label="New" className={fab} color="primary" {...props}>
      <AddIcon />
    </MaterialFab>
  );
};

export default Fab;
