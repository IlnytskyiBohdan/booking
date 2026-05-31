import { Box, Card, CardContent, CardMedia, Chip, Rating, Typography } from "@mui/material";
import { number, string } from "prop-types";

const HotelItem = ({ address, city, countryCode, description, hotelRating, image, name, state }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
    }}
  >
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="190"
        image={`${import.meta.env.BASE_URL}${image}`}
        alt={name}
      />
      {countryCode && (
        <Chip
          label={countryCode}
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            bgcolor: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontWeight: 600,
          }}
        />
      )}
    </Box>
    <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
      <Typography variant="h6" fontWeight={600} sx={{ lineHeight: 1.3, mb: 0.5 }}>
        {name}
      </Typography>
      {hotelRating > 0 && (
        <Rating value={hotelRating} precision={0.5} readOnly size="small" />
      )}
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, lineHeight: 1.5 }}>
          {description}
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary">
        📍 {address}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {city}{state ? `, ${state}` : ""}
      </Typography>
    </CardContent>
  </Card>
);

HotelItem.propTypes = {
  address: string,
  city: string,
  countryCode: string,
  description: string,
  hotelRating: number,
  image: string,
  name: string,
  state: string,
};

export default HotelItem;
