
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link className="btn btn-ghost normal-case text-xl">MusicCommunity</Link>
            </div>
            <div className="navbar-center">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600 text-white py-2 px-3 rounded-l-xl" : "bg-black text-white py-2 px-3 rounded-l-xl"
                        }
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600 text-white p-2" : "bg-black text-white p-2"
                        }
                        >
                        Services
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600 text-white py-2 px-3 rounded-r-xl" : "bg-black text-white py-2 px-3 rounded-r-xl"
                        }
                        >
                        About Us
                    </NavLink>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost">
                    Login
                </button>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;