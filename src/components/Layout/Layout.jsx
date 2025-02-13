import { Outlet } from "react-router-dom";
import {
  createTheme,
  Container,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "../Header/Header";
import { orange } from "@mui/material/colors";
import { Provider } from "react-redux";
import { store } from '../../redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const Layout = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component='main' sx={{ marginTop: "20px" }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  </Provider>
);

export default Layout;
