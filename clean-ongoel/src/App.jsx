
import "./App.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import imagesLogo from "./images/logo.jpg";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
<div className="app">
    <BrowserRouter>
        <nav className="nav">
          <div className="nav-logo">
        <img src={imagesLogo} alt="logo.jpg" className="logo" />
        </div>
        <div className="nav-items-wrapper">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about-us" className="nav-item">About Us</Link>
          <Link to="/get-involved" className="nav-item">Get Involved</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
