import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={logo}
            className="w-[120px] h-[100px]"
            alt="Logo of the site"
          />
        </div>

        <div className="text-xl text-secondary space-x-4 hidden md:block">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[21px] underline font-semibold transition duration-300"
                : "hover:text-primary font-semibold transition duration-300"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[21px]  font-semibold transition duration-300 "
                : "hover:text-primary  font-semibold animate-slideInLeft"
            }
            to="/campaign"
          >
            Campaign
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "text-green"
                : isActive
                ? "text-primary"
                : "hover:text-primary"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "text-green"
                : isActive
                ? "text-primary"
                : "hover:text-primary"
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "text-green"
                : isActive
                ? "text-primary"
                : "hover:text-primary"
            }
            to="/about"
          >
            About Us
          </NavLink>
        </div>

        <div className="text-xl text-secondary">
          <div className="hidden md:block  space-x-2">
            <Link>Login</Link>
            <Link>Sign Up</Link>
          </div>
          <div className="block md:hidden">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
