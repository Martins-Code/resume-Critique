import "./styles/global.css"; // Global styles (includes variables.css)
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import Footer from "./components/Footer"; // Import Footer component
import Homepage from "./components/Homepage"; // Import Homepage component
import Login from "./components/Login"; // Example of Login component
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will appear on all pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer /> {/* Footer will appear on all pages */}
    </Router>
  );
}

export default App;
