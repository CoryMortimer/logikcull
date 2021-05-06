import { forwardRef } from "react";
import { useField } from "react-final-form";
import TextField from "ui/TextField";
import Grid from "ui/Grid";
import Container from "ui/Container";

const FormTextField = forwardRef(({ name, ...props }, ref) => {
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name);

  const normalizedError = Array.isArray(error)
    ? error.join(", ")
    : error || submitError;

  return (
    <TextField
      {...input}
      disabled={submitting}
      {...props}
      error={!!touched && !!normalizedError}
      helperText={touched && normalizedError}
      ref={ref}
    />
  );
});

const AlbumForm = ({ onSubmit }) => {
  return (
    <Container maxWidth="xs">
      <form onSubmit={onSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              required
              name="albumTitle"
              label="Album Name"
              placeholder="Album Name"
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              required
              name="year"
              label="Year"
              placeholder="Year"
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              required
              name="artistName"
              label="Artist Name"
              placeholder="Artist Name"
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              required
              name="condition"
              label="Record Condition"
              placeholder="Record Condition"
            />
          </Grid>
          <button style={{ display: "none" }} type="submit"></button>
        </Grid>
      </form>
    </Container>
  );
};

export default AlbumForm;
