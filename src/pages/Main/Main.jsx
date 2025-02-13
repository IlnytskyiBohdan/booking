import { Box, Typography } from "@mui/material";
import BookingForm from "../../components/Form/Form";

const Main = () => (
  <>
    <Box component='h2' sx={{ fontSize: "40px", lineHeight: 1, marginBottom: 3 }}>
      Travel With{" "}
      <Box component='span' sx={{ color: "primary.main" }}>
        Booking
      </Box>
    </Box>
    <Typography component='p'>
      Plan your trips easily and comfortably! Choose your destination, check-in and check-out dates,
      specify the number of guests, and book the best accommodation options in just a few clicks. We
      take care of your comfort to make every trip unforgettable.
    </Typography>
    <BookingForm />
  </>
);

export default Main;
