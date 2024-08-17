import { Box, Grid, Typography } from "@mui/material";
import {
  MdFitnessCenter,
  MdLocationOn,
  MdPets,
  MdVerified,
} from "react-icons/md";
import Slideshow from "../Slideshow";

const PropertyDetails = ({ mockedListing }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <MdVerified
          style={{ color: "#B8860B", marginRight: "5px", fontSize: "20px" }}
        />
        <Typography variant="caption" color="textSecondary">
          This property has been verified by Aaqaraty team
        </Typography>
      </Grid>
      <div style={{ justifyContent: "center" }}>
        <Slideshow images={mockedListing.images} />
      </div>
      <Grid container spacing={1} sx={{ paddingLeft: "35px" }}>
        <Grid item xs={1}></Grid>
        <Grid container item xs={10}>
          <Grid item xs={12} sx={{ marginBottom: "20px", marginTop: "30px" }}>
            <Typography
              variant="h5"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <MdLocationOn style={{ marginRight: "8px" }} />
              {mockedListing.location_name}
            </Typography>
          </Grid>
          <Grid item container sm={6} md={4}>
            <Grid item className="value" xs={12}>
              <Typography variant="h6">{mockedListing.size} m&sup2;</Typography>
            </Grid>
            <Grid item className="label" xs={12}>
              <Typography color="#B8860B" variant="caption">
                SIZE
              </Typography>
            </Grid>
          </Grid>
          <Grid item container sm={6} md={4}>
            <Grid item className="value" xs={12}>
              <Typography variant="h6">{mockedListing.propertyType}</Typography>
            </Grid>
            <Grid item className="label" xs={12}>
              <Typography color="#B8860B" variant="caption">
                PROPERTY TYPE
              </Typography>
            </Grid>
          </Grid>
          <Grid item container sm={6} md={4}>
            <Grid item className="value" xs={12}>
              <Typography variant="h6">
                {mockedListing.price.toLocaleString()} AED
              </Typography>
            </Grid>
            <Grid item className="label" xs={12}>
              <Typography color="#B8860B" variant="caption">
                PRICE
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{ marginTop: "20px", textAlign: "center" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="#B8860B"
            sx={{ textAlign: "left", paddingLeft: "20px" }}
          >
            Amenities
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              border: "2px solid #B8860B",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <Typography variant="body2" sx={{ marginTop: "5px" }}>
                    Sauna (Mocked Image)
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <Typography variant="body2" sx={{ marginTop: "5px" }}>
                    Balcony (Mocked Image)
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <MdPets style={{ color: "black", fontSize: "40px" }} />
                  <Typography variant="body2" sx={{ marginTop: "5px" }}>
                    Pets Allowed
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <MdFitnessCenter
                    style={{ color: "black", fontSize: "40px" }}
                  />
                  <Typography variant="body2" sx={{ marginTop: "5px" }}>
                    Fitness Center
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyDetails;
