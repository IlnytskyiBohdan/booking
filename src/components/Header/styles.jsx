import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)({
  borderBottom: "1px solid orange",
});

export const Icon = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  marginRight: "10px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  fontWeight: 700,
  fontSize: "18px",
  flexShrink: 0,
}));
