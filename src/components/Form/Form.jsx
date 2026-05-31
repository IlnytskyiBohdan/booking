import { Field, Form, FormSpy } from "react-final-form";
import { Box, Grid } from "@mui/material";
import Button from "../Button/Button.jsx";
import Select from "../Select/Select.jsx";
import { Input } from "../Input/Input.jsx";
import DatePicker from "../Datepicker/Datepicker.jsx";
import { useDestination } from "./hooks/useDestination.js";
import validate from "../../validators/bookingForm.js";

const BookingForm = () => {
  const { handleSubmit, items, loading, initialValues } = useDestination();

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, values }) => (
        <Box sx={{ display: "flex" }} component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Field
                name="destination"
                label="Destination"
                component={Select}
                disabled={loading}
                options={items}
                validate={validate.required}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Field
                name="check_in"
                label="Check in"
                component={DatePicker}
                fullWidth
                disabled={loading}
                validate={validate.required}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Field
                name="check_out"
                label="Check out"
                component={DatePicker}
                fullWidth
                disabled={loading}
                validate={validate.checkOutAfterCheckIn(values.check_in)}
              />
            </Grid>
            <Grid item xs={6} lg={1}>
              <Field
                name="adult"
                label="Adult"
                component={Input}
                fullWidth
                type="number"
                disabled={loading}
                validate={validate.required}
                min={1}
                max={4}
              />
            </Grid>
            <Grid item xs={6} lg={1}>
              <Field
                name="children"
                label="Children"
                component={Input}
                type="number"
                fullWidth
                disabled={loading}
                min={0}
                max={4}
              />
            </Grid>
            <Grid item xs={12} lg={1}>
              <Button loading={loading} type="submit" sx={{ width: "100%", height: "57px" }}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
};

export default BookingForm;
