import {FcGoogle} from 'react-icons/fc'
import {AiOutlineGithub} from 'react-icons/ai'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const location =useLocation();
  const navigate= useNavigate()
  console.log(location);
  const{signInUser}= useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form= new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')
        
       signInUser(email,password)
       .then(result=>{
        console.log(result);
        navigate(location?.state? location.state : '/')
        toast.success('Successfully Logged In')
       })
       .catch(error=>{
        console.log(error.code);
       })


    }
    return (
 
  <div className='h-[100vh] p-5 lg:p-20 bg-[#F9FAFB]'>
    <form onSubmit={handleLogin} > 
       
       <div className='flex flex-col bg-[#FFFFFF] space-y-4 h-[480] w-480 items-center justify-center p-10 '>
       <h2 className='text-2xl font-bold text-center'>Sign In To Your Account</h2>
       <label  className='space-y-4' htmlFor="email"> <span >Email Address</span>
        
       <input type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
       
       </label>
     
       <label  className='space-y-4' htmlFor="email"> <span>Your Password</span>
        
        <input type="text" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        
        </label>
      

    <span className=''>
     
      <span className=''>Forget Password ?</span>
    </span>


     <button className='btn btn-primary w-full max-w-xs  '>Sign In</button>


     <span>Or Continiou With</span>

     <span className='flex gap-10'> 
        <button className='btn'> <FcGoogle className='text-2xl'> </FcGoogle> Google</button>
        <button className='btn bg-black text-white'> <AiOutlineGithub className='text-2xl'></AiOutlineGithub> Github</button>
     </span>

     <Link className='text-blue-700' to={'/signup'}> Register Now</Link>
       </div>
    </form>
  </div>

        
    );
};

export default LoginForm;