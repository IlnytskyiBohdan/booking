import { Card, CardContent, Skeleton } from "@mui/material";

const HotelSkeleton = () => (
  <Card sx={{ height: "100%" }}>
    <Skeleton variant="rectangular" height={190} animation="wave" />
    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Skeleton variant="text" height={28} width="80%" animation="wave" />
      <Skeleton variant="text" height={20} width="35%" animation="wave" />
      <Skeleton variant="text" height={20} width="60%" animation="wave" />
      <Skeleton variant="text" height={20} width="45%" animation="wave" />
    </CardContent>
  </Card>
);

export default HotelSkeleton;
