import { Field, Form } from "react-final-form";
import { Box, Grid } from "@mui/material";
import Button from "../Button/Button.jsx";
import Select from "../Select/Select.jsx";
import { Input } from "../Input/Input.jsx";
import DatePicker from "../Datepicker/Datepicker.jsx";
import { useDestination } from "./hooks/useDestination.js";
import validate from "../../validators/bookingForm.js";

const BookingForm = () => {
  const { handleSubmit, items, loading } = useDestination();

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => {
        return (
          <Box sx={{ display: "flex", margin: "30px 0" }} component='form' onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={3}>
                <Field
                  name='destination'
                  label='Destination'
                  component={Select}
                  disabled={loading}
                  options={items}
                  validate={validate.required}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <Field
                  name='check_in'
                  label='Check in'
                  component={DatePicker}
                  fullWidth
                  type='number'
                  disabled={loading}
                  validate={validate.required}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <Field
                  name='check_out'
                  label='Check out'
                  component={DatePicker}
                  fullWidth
                  type='number'
                  disabled={loading}
                  validate={validate.required}
                />
              </Grid>
              <Grid item xs={6} lg={1}>
                <Field
                  name='adult'
                  label='Adult'
                  component={Input}
                  fullWidth
                  type='number'
                  disabled={loading}
                  validate={validate.required}
                  min={1}
                  max={4}
                />
              </Grid>
              <Grid item xs={6} lg={1}>
                <Field
                  name='children'
                  label='Children'
                  component={Input}
                  type='number'
                  fullWidth
                  disabled={loading}
                  min={0}
                  max={4}
                />
              </Grid>
              <Grid item xs={12} lg={1}>
                <Button loading={loading} type='submit' sx={{ width: "100%", height: "57px" }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        );
      }}
    />
  );
};

export default BookingForm;
