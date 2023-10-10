
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row navbar bg-base-100">
            <div className="navbar-start">
                <Link className="btn btn-ghost normal-case text-xl">MusicCommunity</Link>
            </div>
            <div className="navbar-center">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-sky-500 text-white py-2 px-3 rounded-l-xl" : "bg-black text-white py-2 px-3 rounded-l-xl"
                        }
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-sky-500 text-white py-2 px-3 " : "bg-black text-white py-2 px-3 "
                        }
                        >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-sky-500 text-white py-2 px-3 rounded-r-xl" : "bg-black text-white py-2 px-3 rounded-r-xl"
                    }
                        >
                        Contact
                    </NavLink>
                    
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost">
                    <Link to={'/login'}>Login</Link>
                </button>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;