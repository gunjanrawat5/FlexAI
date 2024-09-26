import React, { useState } from 'react';
import Header from './Header';
import LoginBg from '../utils/Login_Bg.jpg';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
    <div>
        <Header/>
        <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"> {/* Ensure the container takes full screen and hides overflow */}
            
            <div className="absolute inset-0">
                <img className="w-screen h-screen object-cover" src={LoginBg} alt="Background" />
            </div>
            <form className="w-3/12 p-12 bg-slate-200 absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-40">
                <h1 className="font-bold text-black text-3xl py-4">{isSignInForm ? "Sign in" : "Sign Up"}</h1>

                {!isSignInForm && (
                    <input type="text" placeholder="First Name" className="p-4 my-4 w-full bg-slate-800" />
                )}

                {!isSignInForm && (
                    <input type="text" placeholder="Last Name" className="p-4 my-4 w-full bg-slate-800" />
                )}

                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-slate-800" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-800" />

                <button className="p-4 my-6 bg-slate-600 w-full rounded-lg">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
                </p>
            </form>
        </div>
    </div>
    );
};

export default Login;
