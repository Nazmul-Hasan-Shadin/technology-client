
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/photos/logo.jpg'
import UpperNavbar from './UpperNavbar';

const Navbar = () => {
    const links=  <>
    
    <li>
    <NavLink
    to="/"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  > Home</NavLink>
    </li>
       
       <li>
       <NavLink
    to="/addproduct"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " font-bold " : ""
    }
  > Add To Product</NavLink>

       </li>
   <li>
   <NavLink
    to="/cart"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " font-bold " : ""
    }
  > My Cart</NavLink>

   </li>
      
      <li>
      <NavLink
    to="/"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? " font-bold " : ""
    }
  > Blogs</NavLink>
      </li>
    
    
    </>
    return (
        <div className='w-[370px] lg:w-full mx-auto'>
            <UpperNavbar></UpperNavbar>
            <div className="navbar  lg:w-full bg-[#FED700]">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[30] p-2 shadow bg-base-100 rounded-box w-52 font-bold ">
          {
            links
          }
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
        links
       }
    </ul>
  </div>
  <div className="navbar-end">
   <Link to={'/login'}>  <button  className='btn'>Login</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;