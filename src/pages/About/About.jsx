import { Box, Typography } from "@mui/material";

const About = () => (
  <>
    <Box component='h6' sx={{ fontSize: "40px", lineHeight: 1, marginBottom: 2 }}>
      About
    </Box>
    <Typography component='p'>
      Plan your trips easily and comfortably! Choose your destination, check-in and check-out dates,
      specify the number of guests, and book the best accommodation options in just a few clicks. We
      take care of your comfort to make every trip unforgettable.
    </Typography>
  </>
);

export default About;
