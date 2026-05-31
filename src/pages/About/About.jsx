import { Box, Grid, Typography } from "@mui/material";

const features = [
  {
    icon: "🏨",
    title: "10,000+ Hotels",
    desc: "Access a vast selection of hotels, apartments, and resorts across the globe.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "We match any lower price you find — so you always get the best deal.",
  },
  {
    icon: "🔒",
    title: "Secure Booking",
    desc: "Your payment and personal data are protected with bank-level encryption.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "Our team is available around the clock to help with any issues.",
  },
  {
    icon: "⚡",
    title: "Instant Confirmation",
    desc: "Get your booking confirmed immediately — no waiting, no uncertainty.",
  },
  {
    icon: "🗺️",
    title: "150+ Destinations",
    desc: "From New York to Tokyo — we cover the destinations travelers love most.",
  },
];

const About = () => (
  <>
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        mb: 8,
        minHeight: 320,
        display: "flex",
        alignItems: "center",
        backgroundImage:
          `url(${import.meta.env.BASE_URL}images/about-hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
      <Box sx={{ position: "relative", p: { xs: 4, md: 8 } }}>
        <Typography component="h1" variant="h2" fontWeight={800} sx={{ color: "#fff", mb: 2 }}>
          About Booking
        </Typography>
        <Typography component="p" variant="h6" sx={{ color: "rgba(255,255,255,0.85)", maxWidth: 540 }}>
          We're on a mission to make travel accessible, affordable, and stress-free for everyone.
        </Typography>
      </Box>
    </Box>

    <Grid container spacing={6} sx={{ mb: 8, alignItems: "center" }}>
      <Grid item xs={12} md={6}>
        <Typography component="h2" variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          Our Story
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Booking was founded with one goal: to simplify the way people discover and reserve
          accommodations. We believe that finding the perfect place to stay should be as exciting
          as the trip itself — not stressful.
        </Typography>
        <Typography color="text.secondary">
          Since our launch, we've helped over 2 million travelers book stays in more than 150
          destinations worldwide. Our platform connects you directly to thousands of verified
          hotels, boutique apartments, and luxury resorts.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={`${import.meta.env.BASE_URL}images/about-story.jpg`}
          alt="Hotel lobby"
          sx={{ width: "100%", borderRadius: 3, boxShadow: 4 }}
        />
      </Grid>
    </Grid>

    <Box sx={{ mb: 8 }}>
      <Typography component="h2" variant="h4" fontWeight={700} sx={{ mb: 1 }}>
        Why Choose Us
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 5 }}>
        Everything you need for a smooth booking experience
      </Typography>
      <Grid container spacing={3}>
        {features.map((f) => (
          <Grid item xs={12} sm={6} md={4} key={f.title}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.200",
                borderRadius: 2,
                height: "100%",
                transition: "box-shadow 0.2s, border-color 0.2s",
                "&:hover": { boxShadow: 3, borderColor: "primary.main" },
              }}
            >
              <Typography fontSize={36} sx={{ mb: 1.5 }}>
                {f.icon}
              </Typography>
              <Typography component="h3" variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                {f.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {f.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box
      sx={{
        bgcolor: "primary.main",
        borderRadius: 3,
        p: { xs: 4, md: 6 },
        mb: 4,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography component="h2" variant="h4" fontWeight={700} sx={{ mb: 1 }}>
        Ready to explore the world?
      </Typography>
      <Typography sx={{ opacity: 0.9 }}>
        Join millions of travelers who trust Booking for every trip.
      </Typography>
    </Box>
  </>
);

export default About;
