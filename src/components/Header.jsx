import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header=()=>{
  const [btnNameReact,setBtnNameReact]=useState("Login")
  return(
    <div className="flex justify-between bg-pink-300 shadow-lg  ">
      <div className="logo-container">
        <img className="w-54" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"><Link to ="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><i className="fa-solid fa-cart-shopping"></i></li>
          <button className="login"
          onClick={()=>{
            btnNameReact==="Login" ?
            setBtnNameReact("Logout")
            : setBtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul>
      </div>

    </div>
  );
};

export default Header;