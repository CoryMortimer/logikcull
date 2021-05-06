import { useState } from "react";
import UpdateAlbumDialog from "./UpdateAlbumDialog";
import Fab from "ui/Fab";
import { Form } from "react-final-form";
import { AlbumValidation, addNewAlbum } from "./resources/album";

const AddAlbum = ({ page }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => setIsDialogOpen(false);

  const onSubmit = (values, { restart }, callback) => {
    addNewAlbum(values, page);
    handleClose();
    restart();
    callback();
  };

  const validate = (values) => {
    try {
      AlbumValidation.parse(values);
    } catch (error) {
      return error.formErrors.fieldErrors;
    }
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <UpdateAlbumDialog
            open={isDialogOpen}
            handleClose={handleClose}
            onSubmit={handleSubmit}
          />
        )}
      />
      <Fab onClick={() => setIsDialogOpen((isOpen) => !isOpen)} />
    </>
  );
};

export default AddAlbum;
