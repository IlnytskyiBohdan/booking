import { Outlet } from "react-router-dom";
import {
  Alert,
  Box,
  Container,
  CssBaseline,
  Grid,
  Snackbar,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Header from "../Header/Header";
import { orange } from "@mui/material/colors";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import selector from "../../redux/hotels/selectors";
import hotels from "../../redux/hotels/slice";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[900],
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 10,
      borderTop: "1px solid",
      borderColor: "grey.200",
      bgcolor: "grey.50",
      py: 6,
    }}
  >
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography component="p" variant="h6" fontWeight={700} color="primary.main" sx={{ mb: 1 }}>
            Booking
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your trusted travel companion for finding the best accommodation worldwide.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography component="p" variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>
            Company
          </Typography>
          {["About us", "Careers", "Press"].map((link) => (
            <Typography key={link} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              {link}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography component="p" variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>
            Support
          </Typography>
          {["Help center", "Contact us", "Privacy"].map((link) => (
            <Typography key={link} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              {link}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography component="p" variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>
            Popular Destinations
          </Typography>
          {["New York", "Boston", "Los Angeles", "Miami"].map((city) => (
            <Typography key={city} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              {city}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 5,
          pt: 3,
          borderTop: "1px solid",
          borderColor: "grey.200",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Booking. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Made with ♥ for travelers
        </Typography>
      </Box>
    </Container>
  </Box>
);

const AppContent = () => {
  const dispatch = useDispatch();
  const error = useSelector(selector.error);

  return (
    <>
      <Header />
      <Container component="main" sx={{ marginTop: "20px" }}>
        <Outlet />
      </Container>
      <Footer />
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={() => dispatch(hotels.actions.setError(null))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="error"
          onClose={() => dispatch(hotels.actions.setError(null))}
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

const Layout = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  </Provider>
);

export default Layout;
