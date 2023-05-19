import React from "react";
import Home from "../pages/Home";
import {Route, Routes} from 'react-router-dom'
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Trending from "../pages/Trending";
import Kids from "../pages/Kids";
import Footwear from "../pages/Footwear";
import Essential from "../pages/Essential";
import Userprofile from "../pages/Userprofile";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact"

function Allroutes() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menswear" element={<Mens/>}/>
        <Route path="/womenswear" element={<Womens/>}/>
        <Route path="/kidswear" element={<Kids/>}/>
        <Route path="/footwear" element={<Footwear/>}/>
        <Route path="/essential" element={<Essential/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path="/userprofile" element={<Userprofile/>}/>
        
      </Routes>
    </div>
  );
}

export default Allroutes;
