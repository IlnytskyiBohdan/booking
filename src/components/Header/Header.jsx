import { Wrapper } from "./styles.jsx";
import Logo from "../Logo/Logo.jsx";
import { Box, Container, Stack } from "@mui/material";
import Button from "../Button/Button.jsx";
import { routes } from "../../constants/routes.jsx";

const Header = () => (
  <Wrapper component="header">
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "16px",
        }}
      >
        <Logo />
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
          <Button reactHref={routes.main.path}>Main</Button>
          <Button reactHref={routes.about.path}>About</Button>
        </Stack>
      </Box>
    </Container>
  </Wrapper>
);

export default Header;
