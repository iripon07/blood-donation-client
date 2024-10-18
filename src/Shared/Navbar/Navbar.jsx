import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto ">
      <div
        style={{ border: "1px solid red" }}
        className="flex justify-between items-center h-[100px]"
      >
        <div >
          <img
            src={logo}
            className="w-[150px] h-[50px]"
            alt="Logo of the site"
          />
        </div>
        <div className="text-xl text-secondary space-x-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/campaign">Campaign</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
        <div className="text-xl text-secondary space-x-2">
          <Link>Login</Link>
          <Link>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
