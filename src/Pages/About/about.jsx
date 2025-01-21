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
              variant="h1"
              gutterBottom
              sx={{
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
                textAlign: "left",
              }}
            >
              Hello everyone! Here we are, proudly at your service, offering a 
              reliable platform that enables users to request parcel pickups, track deliveries 
              in real-time, and pay for services with ease and flexibility. At Pickup and Pay 
              Parcel, we are committed to redefining how logistics work for individuals and businesses,
               making the process seamless, transparent, and secure.<br></br>

              We understand the challenges faced by senders and recipients in traditional 
              delivery systems — whether it’s a lack of tracking options, complex payment 
              systems, or delays in service. That’s why we’ve built a solution that not only 
              addresses these pain points but also introduces features that simplify your everyday
               logistics needs.<br></br>

              Our platform bridges the gap between senders and recipients by offering services 
              tailored to suit every need. Whether it’s a small package, a high-value item, or a 
              bulk shipment, our system ensures that your parcels are picked up and delivered with 
              care and efficiency. We leverage technology to provide real-time tracking, giving you
               peace of mind by letting you know exactly where your parcel is at every step.


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
                  <Typography variant="h2" gutterBottom >
                    Our Vision
                  </Typography>
                  <Typography variant='p1'>
                  Our vision is to become the most trusted and innovative logistics partner, transforming the 
                  way parcels are picked up, tracked, and delivered. We aspire to build a future where logistics
                   is seamless, accessible, and empowering for everyone.<br></br><br></br>
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
                  <Typography variant='h2' gutterBottom >
                    Our Mission
                  </Typography>
                  <Typography variant='p1'>
                  Our mission is to revolutionize the logistics industry by providing fast, secure, and 
                  customer-centric parcel delivery services. We aim to simplify the process for individuals 
                  and businesses by offering innovative solutions that prioritize transparency, efficiency, 
                  and reliability.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ py: 6 }}>
          <Container>
            <Typography textAlign="center" gutterBottom variant='h2'>
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
                  <Typography gutterBottom variant='h3'>
                    Fast Delivery
                  </Typography>
                  <Typography variant='p2'>
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
                  <Typography gutterBottom variant='h3'>
                    Real-Time Tracking
                  </Typography>
                  <Typography variant='p2'>
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
                  <Typography gutterBottom variant='h3'>
                    Secure Payments
                  </Typography>
                  <Typography variant='p2'>
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
            <Typography textAlign="center" gutterBottom variant='h2'>
              Our Journey in Numbers
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={3} textAlign="center">
                <Typography variant='p1'>
                  000
                </Typography><br></br>
                <Typography variant='p1'>Deliveries Completed</Typography >
              </Grid>
              <Grid item xs={12} md={3} textAlign="center">
                <Typography variant='p1'>
                  000
                </Typography><br></br>
                <Typography variant='p1'>Happy Customers</Typography>
              </Grid>
              <Grid item xs={12} md={3} textAlign="center">
                <Typography variant='p1'>
                  000
                </Typography><br></br>
                <Typography variant='p1'>Cities Served</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Call to Action */}
        <Box sx={{ py: 6, textAlign: "center", bgcolor: "#ecfffd", color: "#fff" }}>
          <container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
            <Typography gutterBottom variant='h3'>
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
          </Grid>
          
          <Grid item xs={12} md={6}>


          {/* Call to Action */}
            <Typography gutterBottom variant='h3'>
              Join Pickup And Pay Parcel
            </Typography>
            <Typography sx={{ mb: 4, fontFamily: "railway", fontSize: "16px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.5", color: '#666' }}>
              Find you a greatful job at pickup and pay parcel.
            </Typography>
            <Button variant="contained" size="large" sx={{
              backgroundColor: "#0eb9d3", // Normal background color
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#131c44", // Hover background color
              },
              color: "#fff", fontSize: "15px"// Text color
            }}>
              Carrer
            </Button>
      </Grid>
      </Grid>
      </container>
      </Box>
      </div>
    </>
  );
}

export default About;
