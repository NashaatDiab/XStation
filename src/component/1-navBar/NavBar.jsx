import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const buttons = [
    { name: " Sign In", id: "1 ", url: "/SignIn" },
    { name: " Register", id: "2 ", url: "/Register" },
  ];

  return (
    <div className="d-flex justify-content-around p-2 " style={{borderBottom:"1px solid #000"}} >
      <Link to="/" style={{textDecoration:"none", color:"#000" }}>XStation</Link>
      <nav>
        {buttons.map((button) => (
          <Link className="button  p-2" to={button.url} key={button.id}>
            {button.name}
          </Link>
        ))}
      </nav>
    </div>
    
  );
};

export default NavBar;
