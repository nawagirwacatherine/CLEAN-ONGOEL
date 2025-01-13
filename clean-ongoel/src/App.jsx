
import "./App.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import Projects from "./pages/Projects.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    
        <nav className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about-us" className="nav-item">About Us</Link>
          <Link to="/get-involved" className="nav-item">Get Involved</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/news" className="nav-item">News</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
