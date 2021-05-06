import UpdateArtistDialog from "./UpdateArtistDialog";
import { Form } from "react-final-form";
import { updateArtist } from "./resources/artist";

const UpdateArtist = ({ initialValues, isDialogOpen, handleClose }) => {
  const onSubmit = ({ id, artistName }, { restart }, callback) => {
    updateArtist(id, artistName);
    handleClose();
    restart();
    callback();
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <UpdateArtistDialog
          open={isDialogOpen}
          handleClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
    />
  );
};

export default UpdateArtist;
