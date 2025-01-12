import "./App.css"
import Home from"./pages/Home.jsx"
import AboutUs from"./pages/AboutUs.jsx"
import GetInvolved from "./pages/GetInvolved.jsx"
import Projects from"./pages/Projects.jsx"
import News from"./pages/News.jsx"
import Contact from"./pages/Contact.jsx"
import { Routes, Route, Link } from 'react-router-dom';


function  App () {
   return (
    <>
    <div>
    <Link to="/" className="nav-item">Home</Link>
    <Link to="/About-us" className="nav-item">About us</Link>
    <Link to="/get-involved" className="nav-item">GetInvolved</Link>
    <Link to="/projects" className="nav-item">Projects</Link>
    <Link to="/news" className="nav-item">News</Link>
    <Link to="/contact" className="nav-item">Contact</Link>

   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/getinvolved" element={< GetInvolved/>} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      </div>
    </>

   )
}

export default App;
