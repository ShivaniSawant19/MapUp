import React from 'react'
import '../index.css'
import Footer from './Footer'

export default function Navbar() {
  return (
    <nav>
      <ul className="list">
          <li className="items">Home</li>
          <li className="items">Map</li>
          <div>

     <label>

       

       <select>

         <option value="fruit">Location</option>

         <option value="vegetable">East</option>

         <option value="meat">West</option>
         <option value="meat">South</option>
         <option value="meat">North</option>


       </select>

     </label>

   </div>
          <li className="items">..</li>
          
          <button>Login</button>
          <button>LogOut</button>
        </ul>
     
    </nav>
       
  )
  
}


