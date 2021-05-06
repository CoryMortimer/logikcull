import { forwardRef } from "react";
import ArtistForm from "./ArtistForm";
import Dialog from "ui/Dialog";
import Toolbar from "ui/Toolbar";
import AppBar from "ui/AppBar";
import Slide from "ui/Slide";
import IconButton from "ui/IconButton";
import Button from "ui/Button";
import CloseIcon from "ui/icons/Close";
import Typography from "ui/Typography";
import Grid from "ui/Grid";

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateArtistDialog = ({ open, handleClose, onSubmit }) => {
  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <AppBar style={{ position: "relative" }}>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs="auto">
              <Grid container alignItems="center">
                <Grid item xs="auto">
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <Grid item xs="auto">
                  <Typography display="inline" variant="h6">
                    Update Artist
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs="auto">
              <Grid container justify="flex-end">
                <Grid item xs="auto">
                  <Button autoFocus color="inherit" onClick={onSubmit}>
                    save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ArtistForm onSubmit={onSubmit} />
    </Dialog>
  );
};

export default UpdateArtistDialog;
