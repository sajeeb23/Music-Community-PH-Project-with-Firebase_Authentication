import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.srvs(password)) {
            setPasswordError("Password must contain at least one capital letter.");
            return;
        }
        if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]/.srvs(password)) {
            setPasswordError("Password must contain at least one special character.");
            return;
        }

        setPasswordError(null);

        await createUser(email, password);
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-500">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Image</span>
                                </label>
                                <input type="file" name="image" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                {passwordError && (
                                    <p className="text-red-600">{passwordError}</p>
                                )}
                                <label className="label">
                                    <div className="label-text-alt text-white">Already have an account? <Link to={'/login'} className="link link-hover font-bold">Login!</Link></div>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
