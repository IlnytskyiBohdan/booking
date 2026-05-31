import { Box, Card, CardContent, CardMedia, Chip, Rating, Typography } from "@mui/material";
import { number, string } from "prop-types";

const HOTEL_PHOTOS = [
  "photo-1564501049412-61c2a3083791",
  "photo-1582719508461-905c673771fd",
  "photo-1571896349842-33c89424de2d",
  "photo-1551882547-ff40c63fe5fa",
  "photo-1455587734955-081b22074882",
  "photo-1566665797739-1674de7a421a",
  "photo-1578683010236-d716f9a3f461",
  "photo-1590490360182-c33d57733427",
  "photo-1631049307264-da0ec9d70304",
  "photo-1611892440504-42a792e24d32",
  "photo-1596436889106-be35e843f974",
  "photo-1487958449943-2429e8be8625",
  "photo-1542314831-068cd1dbfeeb",
  "photo-1519449556851-5720b33024e7",
  "photo-1445019980597-93fa8acb246c",
];

const getHotelPhoto = (id) => {
  const photo = HOTEL_PHOTOS[id % HOTEL_PHOTOS.length];
  return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=400&h=190&q=75`;
};

const HotelItem = ({ address, city, countryCode, hotelRating, id, name, state }) => (
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
        image={getHotelPhoto(id)}
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
  hotelRating: number,
  id: number,
  name: string,
  state: string,
};

export default HotelItem;
