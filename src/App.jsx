import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "../src/Pages/Home/home.jsx";
import About from "../src/Pages/About/about.jsx";
import Contact from "./pages/Contact/contact.jsx";
import User from "./pages/User/user.jsx";
import Sprt from "./pages/Support/support.jsx";
import Order from "./Pages/Order-Placement/order.jsx";
import Faq from "./Pages/Faq/Faq.jsx";

function App() {
  return (
    <>
      <div className="navbar">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<User />} />
            <Route path="/support" element={<Sprt />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
