import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './Components/Sidenav';
import Map2 from "./Pages/Map2";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Footer from '../src/Pages/Footer';
import Location from "./Pages/Location";
import Navbar from "./Pages/Home";

// import GoogleMap from '../src/Pages/map';

function App() {
  return (
    <div className="App">
      
      <Sidenav/>
  
      <main>

      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/Map2" element={<Map2 />} />
        <Route path="/location" element={<Location />}/>
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {/* <GoogleMap /> */}
    
      </main>

    </div>
  );
}

export default App;
