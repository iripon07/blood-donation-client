import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div
        className="flex justify-between items-center"
      >
        <div >
          <img
            src={logo}
            className="w-[100px] h-[100px]"
            alt="Logo of the site"
          />
        </div>
        <div className="text-xl text-secondary space-x-4">
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
