// import React from 'react'

// export default function Explore() {
//   return (
//     <div>Map</div>
//   )
// }
import React from "react";

import "../index.css";
import Footer from './Footer'

import GoogleMap from './map';
import Navbar from "./Home";

function App() {
  return (
    <div className="App">
     
      <GoogleMap />
      <Footer />
    </div>
  );
}

export default App;