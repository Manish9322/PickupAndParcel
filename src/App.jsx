import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Pages/About/theme"; // Path to your theme file
import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "../src/Pages/Home/home.jsx";
import About from "../src/Pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import User from "./pages/User/user.jsx";
import Sprt from "./pages/Support/support.jsx";
import Order from "./Pages/Order-Placement/order.jsx";

function App() {
  return (
    <>
      <div className="navbar">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/about" element={<ThemeProvider theme={theme}>
            <CssBaseline /><About />  </ThemeProvider>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<User />} />
            <Route path="/support" element={<Sprt />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
