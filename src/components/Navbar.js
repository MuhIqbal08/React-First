import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'


const Navbar = (props) => {
    const navigate = useNavigate()
    // console.log(props.contactNavbar)
  return (
    <header>
      <nav className="navbar-app">
        <div className="brand" onClick={() => navigate('/')}>
          Latihan
        </div>
        <ul>
          <li>{!props.contactNavbar ? 'About' : props.contactNavbar}</li>
          <li>
            <div onClick={() => navigate('/dashboard')}>Dashboard</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
 
export default Navbar;