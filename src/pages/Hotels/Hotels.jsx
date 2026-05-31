import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "redux-first-history";
import {
  Box, Button, Fade, FormControl, Grid,
  InputLabel, MenuItem, Select, Typography,
} from "@mui/material";
import HotelItem from "../../components/HotelItem/HotelItem";
import HotelSkeleton from "../../components/HotelSkeleton/HotelSkeleton";
import { useHotels } from "./hooks/useHotels";
import { routes } from "../../constants/routes";

const SORT_OPTIONS = [
  { value: "rating_desc", label: "Rating: High to Low" },
  { value: "rating_asc",  label: "Rating: Low to High" },
  { value: "name_asc",    label: "Name: A → Z" },
  { value: "name_desc",   label: "Name: Z → A" },
];

const RATING_OPTIONS = [
  { value: 0,   label: "All ratings" },
  { value: 3,   label: "3★ and above" },
  { value: 4,   label: "4★ and above" },
  { value: 4.5, label: "4.5★ and above" },
];

const Hotels = () => {
  const dispatch = useDispatch();
  const { items, loading } = useHotels();
  const [sort, setSort] = useState("rating_desc");
  const [minRating, setMinRating] = useState(0);

  const displayed = useMemo(() => (
    [...items]
      .filter(h => !minRating || (h.hotel_rating || 0) >= minRating)
      .sort((a, b) => {
        if (sort === "rating_desc") return (b.hotel_rating || 0) - (a.hotel_rating || 0);
        if (sort === "rating_asc")  return (a.hotel_rating || 0) - (b.hotel_rating || 0);
        if (sort === "name_asc")    return a.name.localeCompare(b.name);
        if (sort === "name_desc")   return b.name.localeCompare(a.name);
        return 0;
      })
  ), [items, sort, minRating]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3, flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Typography component="h1" variant="h4" fontWeight={700}>Available Hotels</Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            {loading ? "Searching..." : `${displayed.length} properties found`}
          </Typography>
        </Box>
        <Button variant="outlined" onClick={() => dispatch(push(routes.main.path))}>
          ← Back to search
        </Button>
      </Box>

      {!loading && items.length > 0 && (
        <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
          <FormControl size="small" sx={{ minWidth: 190 }}>
            <InputLabel>Sort by</InputLabel>
            <Select value={sort} label="Sort by" onChange={e => setSort(e.target.value)}>
              {SORT_OPTIONS.map(o => (
                <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>Min rating</InputLabel>
            <Select value={minRating} label="Min rating" onChange={e => setMinRating(e.target.value)}>
              {RATING_OPTIONS.map(o => (
                <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      <Grid container spacing={3}>
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <HotelSkeleton />
            </Grid>
          ))
        ) : displayed.length === 0 ? (
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography fontSize={72} sx={{ mb: 2 }}>🏨</Typography>
              <Typography component="h2" variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                No hotels found
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Try adjusting your search or removing filters
              </Typography>
              {minRating > 0 && (
                <Button variant="outlined" onClick={() => setMinRating(0)}>
                  Clear filters
                </Button>
              )}
            </Box>
          </Grid>
        ) : (
          displayed.map((hotel, index) => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <Fade in timeout={200 + index * 40}>
                <Box sx={{ height: "100%" }}>
                  <HotelItem
                    image={hotel.image}
                    name={hotel.name}
                    description={hotel.description}
                    address={hotel.address}
                    city={hotel.city}
                    state={hotel.state}
                    countryCode={hotel.country_code}
                    hotelRating={hotel.hotel_rating}
                  />
                </Box>
              </Fade>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default Hotels;
