import { useHotels } from "./hooks/useHotels";
import HotelItem from "../../components/HotelItem/HotelItem";
import { Grid, Typography } from "@mui/material";

const Hotels = () => {
  const { items } = useHotels();

  return (
    <>
      <Typography component='h1' variant='h3'>
        Hotels
      </Typography>
      <Grid container>
        {items.map((hotel) => (
          <Grid xs={12} sm={4} key={hotel.id} sx={{ marginBottom: "30px" }}>
            <HotelItem
              address={hotel.address}
              city={hotel.city}
              countryCode={hotel.country_code}
              name={hotel.name}
              state={hotel.state}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Hotels;
