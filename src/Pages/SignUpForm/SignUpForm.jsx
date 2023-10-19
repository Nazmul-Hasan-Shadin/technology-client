import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUpForm = () => {
     const {createUser,handleUpdateProfile}= useContext(AuthContext)
    const handleSignUp=(e)=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const email= form.get('email')
        const password= form.get('password')
        const name= form.get('fullname')
        const photo= form.get('photo')
        console.log('hi');
        console.log(name,photo ,'this is phot');

        if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            toast.error("Password Should contain at least one uppercase special character and minimum length 6")
            return
        }
          
        createUser(email,password)
        .then(res=>{
            console.log(res)
            handleUpdateProfile(name,photo)
            .then(result=>{
                console.log(result)
            })
            .catch(error=>{
                console.log(error.message)
            })
              

            toast.success('You have successfully register ');
        })
       .catch(err=>{
        console.log(err.message);
       })
 

       
    


    }
    return (

        <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                  <form onSubmit={handleSignUp}>
                  <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <input 
                                type="text"
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                                       <input 
                                       required
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="photo"
                                placeholder="profile photo url" />
        
                            <input 
                                type="text"
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />
        
                            <input 
                                required
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
              
        
                            <button
                                type="submit"
                                className="w-full text-center py-3 btn rounded bg-green text-white bg-[green] focus:outline-none my-1"
                            >Create Account</button>
        
                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and 
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                  </form>
        
                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <Link  className="no-underline border-b border-blue text-blue" to={'/login'}>
                             <span className='btn'> Log in</span>
                            </Link>
                        </div>
                    </div>
                </div>
    );
};

export default SignUpForm;