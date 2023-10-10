import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidUser } from 'react-icons/bi';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <div className="flex flex-col lg:flex-row md:flex-row navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    MusicCommunity
                </Link>
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
                {user ? (
                    <>
                        <button onClick={handleLogout} className="btn bg-red-500 text-white">
                            Log Out
                        </button>
                        {user.photoURL ? (
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="Avatar" />
                                </div>
                            </div>
                        ) : <div className="text-black"><BiSolidUser></BiSolidUser></div> }
                    </>
                ) : (
                    <button className="btn bg-red-500 text-white">
                        <Link to="/login">Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
