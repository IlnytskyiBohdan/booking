import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { string } from 'prop-types'

const HotelItem = (props) => {
  const { address, city, countryCode, name, state } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height="149" image="https://placehold.co/345x140" />
      <CardContent>
        <Typography component="h6" variant="h5">{name}</Typography>
        <Typography component="span">Address: {address}</Typography>
        <Typography component="span">Country code: {countryCode}</Typography>
        <Typography component="span">State: {state}</Typography>
        <Typography component="span">Cite: {city}</Typography>
      </CardContent>
    </Card>
  );
};


HotelItem.propTypes = {
  address: string,
  city: string,
  countryCode: string,
  name: string,
  state: string,
}

export default HotelItem;
