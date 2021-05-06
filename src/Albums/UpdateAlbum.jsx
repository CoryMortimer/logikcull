import UpdateAlbumDialog from "./UpdateAlbumDialog";
import { Form } from "react-final-form";
import { AlbumValidation, updateAlbum } from "./resources/album";

const UpdateAlbum = ({ page, initialValues, isDialogOpen, handleClose }) => {
  const onSubmit = (values, { restart }, callback) => {
    updateAlbum(values, page);
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
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <UpdateAlbumDialog
          open={isDialogOpen}
          handleClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}
    />
  );
};

export default UpdateAlbum;
