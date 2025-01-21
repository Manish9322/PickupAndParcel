import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "'Open Sans'",
      fontWeight: 600,
      fontSize: "50px",
      color: "#3b3b3b",
    },
    h2: {
      fontFamily: "'Open Sans'", 
      fontWeight: 600,
      fontSize: "40px",
      color: "#3b3b3b",
    },
    h3:{
        fontFamily: "'Open Sans'", 
      fontWeight: 600,
      fontSize: "30px",
      color: "#3b3b3b",
    },
    h4:{
        fontFamily: "'Open Sans'", 
      fontWeight: 600,
      fontSize: "20px",
      color: "#3b3b3b",
    },
    h5:{
        fontFamily: "'Open Sans'", 
      fontWeight: 600,
      fontSize: "18px",
      color: "#3b3b3b",
    },
    h6:{
        fontFamily: "'Open Sans'", 
      fontWeight: 600,
      fontSize: "16px",
      color: "#3b3b3b",
    },
    p1: {
      fontFamily: "'Raleway'",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.5px",
      color: "#666",
    },
    p2: {
      fontFamily: "'Raleway'",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.5px",
      color: "#666",
    },
    p3: {
        fontFamily: "'Raleway'",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.3,
        letterSpacing: "0.5px",
        color: "#666",
      },
  },
});

export default theme;
