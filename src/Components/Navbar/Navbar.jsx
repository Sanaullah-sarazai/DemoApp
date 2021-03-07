

import Experince from "../Experince/Experince";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

import "./Navbar.css";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  



const Navbar = () => {
    return ( 
 <div>
  <BrowserRouter>
        <nav>
            <Link to="/experience">Experience</Link>
            <Link to="/education">Education</Link>
            <Link to="/skills">Skills</Link>
        </nav>
        
        <div>
        <Routes>
        <Route path="/experience" element={<Experince />} />
        <Route path="/education" element={<Education />} />
         <Route path="/skills" element={<Skills />} />
        </Routes>
        </div>
        </BrowserRouter> 

    </div>
    )
   
}

export default Navbar;