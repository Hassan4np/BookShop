import { useState } from "react";
import { Link } from "react-router-dom";
import logo  from "../../assets/img/logo/login.svg"



const Signup = () => {
    const [error,seterror] = useState('');
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2 mr-10 hidden lg:block ">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 lg:w-1/2 h-full">
                    <h1 className="text-5xl p-2 font-bold">Register</h1>
                    <form className="card-body" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="test" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="test" placeholder="Photo Url" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                           
                            <p className='text-base mt-3'>Have an Account  <Link href="login" className='text-green-600' to='/login'>Login</Link></p>
                            {
                                error&&<p className='text-base mt-3 text-red-700'>{error}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;