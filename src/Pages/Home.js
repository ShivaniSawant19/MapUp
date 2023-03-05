import React from "react";

import "../index.css";
import Footer from './Footer'
import Navbar from "./Navbar";

import GoogleMap from './map';

import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;