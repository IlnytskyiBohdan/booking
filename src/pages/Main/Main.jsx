import { Box, Grid, Typography } from "@mui/material";
import BookingForm from "../../components/Form/Form";

const stats = [
  { value: "10K+", label: "Hotels worldwide" },
  { value: "150+", label: "Destinations" },
  { value: "2M+", label: "Happy travelers" },
  { value: "4.8★", label: "Average rating" },
];

const Main = () => (
  <>
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        mb: 6,
        minHeight: { xs: 480, md: 520 },
        display: "flex",
        alignItems: "flex-end",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <Box sx={{ position: "relative", p: { xs: 3, md: 5 }, width: "100%" }}>
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{ color: "#fff", lineHeight: 1.1, mb: 1 }}
        >
          Travel With{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Booking
          </Box>
        </Typography>
        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}>
          Find the best hotels at the best prices. Book in minutes.
        </Typography>
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.95)",
            borderRadius: 2,
            p: { xs: 2, md: 3 },
            backdropFilter: "blur(8px)",
          }}
        >
          <BookingForm />
        </Box>
      </Box>
    </Box>

    <Grid container spacing={3} sx={{ mb: 8 }}>
      {stats.map((s) => (
        <Grid item xs={6} sm={3} key={s.label}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "grey.200",
              transition: "box-shadow 0.2s",
              "&:hover": { boxShadow: 3 },
            }}
          >
            <Typography variant="h4" fontWeight={700} color="primary.main">
              {s.value}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {s.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>

    <Box sx={{ mb: 8 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
        How It Works
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Three simple steps to your perfect stay
      </Typography>
      <Grid container spacing={4}>
        {[
          {
            step: "01",
            title: "Choose Destination",
            desc: "Select from 150+ cities and destinations around the world.",
          },
          {
            step: "02",
            title: "Pick Your Dates",
            desc: "Set check-in and check-out dates that work for your schedule.",
          },
          {
            step: "03",
            title: "Book & Enjoy",
            desc: "Confirm your booking in seconds and enjoy your stay.",
          },
        ].map((item) => (
          <Grid item xs={12} md={4} key={item.step}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ color: "primary.main", opacity: 0.25, lineHeight: 1, minWidth: 60 }}
              >
                {item.step}
              </Typography>
              <Box>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);

export default Main;
