// import React from "react";

// const about = () => {
//   return <h1>ABOUT PAGE</h1>;
// };

// export default about;

import React from 'react'
import { Container, Grid, Typography, Box, Button } from "@mui/material";


function About() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <Box
          sx={{
            height: { xs: "auto", md: "75vh" }, // Adjust height for smaller screens
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ecfffd",
            textAlign: "center",
            px: 2, // Add horizontal padding for smaller screens
          }}
        >
          <Container>
            <Typography
              variant="h2"
              gutterBottom
              color="#3b3b3b"
              sx={{
                fontFamily: "'Open Sans'",
                fontWeight: "600",
                fontSize: { xs: "32px", md: "50px" }, // Responsive font size
                wordWrap: "break-word", // Ensure text doesn't overflow
              }}
            >
              <b>Welcome to Pickup and Pay Parcel</b>
            </Typography>
            <Typography
              sx={{
                mb: 4,
                fontFamily: "Raleway",
                fontSize: { xs: "14px", md: "16px" }, // Smaller font size for mobile
                fontWeight: "400",
                lineHeight: "1.5",
                letterSpacing: "0.5px",
                color: "#666",
                px: { xs: 2, sm: 4 }, // Add padding for smaller screens
                textAlign: "center",
              }}
            >
              Hello everyone! Here we are on your service providing a platform that enables users to
              request parcel pickups, track deliveries, and pay for services conveniently. At Pickup and
              Pay Parcel, we believe in making logistics simple, transparent, and secure. We are
              contributing to society with all these services and working to make your life much easier.
              Our platform bridges the gap between senders and recipients by offering reliable parcel pickup and delivery services tailored to your needs. Whether it’s a small package or a bulk shipment, we’ve got you covered.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#0eb9d3",
                borderRadius: "50px", // Capsule shape
                "&:hover": {
                  backgroundColor: "#131c44", // Hover background color
                },
                color: "#fff", // Text color
                fontSize: "15px",
                px: { xs: 3, sm: 5 }, // Adjust padding for smaller buttons on mobile
                py: 1.5, // Vertical padding
                textTransform: "none", // Prevent uppercase transformation
                mt: 1, // Margin-top for spacing
              }}
            >
              Get Started
            </Button>
          </Container>
        </Box>

        {/* Vision Section */}
        <Box sx={{ py: 6, bgcolor: "background.paper" }}>
          <Container>
            <Grid container spacing={4}>
              {/* Our Vision Card */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{

                    p: 4, // Padding
                    borderRadius: 2, // Rounded corners
                    boxShadow: 3, // Add shadow for a card effect
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                      transition: "all 0.3s ease-in-out",
                    }
                  }}
                >
                  <Typography variant="h4" gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "30px" }}>
                    Our Vision
                  </Typography>
                  <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>
                    To become the most trusted logistics partner, providing seamless and reliable parcel
                    delivery services across the globe.
                  </Typography>
                </Box>
              </Grid>

              {/* Our Mission Card */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 4, // Padding
                    borderRadius: 2, // Rounded corners
                    boxShadow: 3, // Add shadow for a card effect
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                      transition: "all 0.3s ease-in-out",
                    }
                  }}
                >
                  <Typography  gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "30px" }}>
                    Our Mission
                  </Typography>
                  <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>
                    To ensure fast, secure, and affordable delivery services with exceptional customer
                    satisfaction.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ py: 6 }}>
          <Container>
            <Typography  textAlign="center" gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "30px" }}>
              Why Choose Us?
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Box textAlign="center" sx={{
                  p: 4, // Padding
                  borderRadius: 2, // Rounded corners
                  boxShadow: 3, // Add shadow for a card effect
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                    transition: "all 0.3s ease-in-out",
                  }
                }}>
                  <Typography  gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "30px" }}>
                    Fast Delivery
                  </Typography>
                  <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>
                    Experience quick and reliable parcel delivery services tailored to your needs.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center" sx={{

                  p: 4, // Padding
                  borderRadius: 2, // Rounded corners
                  boxShadow: 3, // Add shadow for a card effect
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                    transition: "all 0.3s ease-in-out",
                  }
                }}>
                  <Typography  gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "30px" }}>
                    Real-Time Tracking
                  </Typography>
                  <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>
                    Monitor your parcel’s journey with our advanced GPS tracking system.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center" sx={{

                  p: 4, // Padding
                  borderRadius: 2, // Rounded corners
                  boxShadow: 3, // Add shadow for a card effect
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 6,
                    transition: "all 0.3s ease-in-out",

                  }
                }}>
                  <Typography gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "30px" }}>
                    Secure Payments
                  </Typography>
                  <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>
                    Multiple payment options for a seamless and secure experience.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Statistics Section */}
        <Box sx={{ py: 6, bgcolor: "background.default" }}>
          <Container>
            <Typography  textAlign="center" gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "30px" }}>
              Our Journey in Numbers
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={3} textAlign="center">
                <Typography  color="#666">
                  000
                </Typography>
                <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>Deliveries Completed</Typography >
              </Grid>
              <Grid item xs={12} md={3} textAlign="center">
                <Typography  color="#666">
                  000
                </Typography>
                <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>Happy Customers</Typography>
              </Grid>
              <Grid item xs={12} md={3} textAlign="center">
                <Typography  color="#666">
                  000
                </Typography>
                <Typography sx={{ fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>Cities Served</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Call to Action */}
        <Box sx={{ py: 6, textAlign: "center", bgcolor: "#ecfffd", color: "#fff" }}>
          <Container>
            <Typography  gutterBottom sx={{ color: '#3b3b3b', fontFamily: "'Open Sans'", fontWeight: "600", fontSize: "40px" }}>
              Ready to Get Started?
            </Typography>
            <Typography sx={{ mb: 4, fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>
              Join thousands of happy customers who trust Pickup and Pay Parcel for their delivery
              needs.
            </Typography>
            <Button variant="contained" size="large" sx={{
              backgroundColor: "#0eb9d3", // Normal background color
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#131c44", // Hover background color
              },
              color: "#fff", fontSize: "15px"// Text color
            }}>
              Sign Up Now
            </Button>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default About;
