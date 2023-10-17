import user from '../../assets/photos/user.png'
import {IoPeopleSharp} from 'react-icons/io5'
import {FiShoppingCart} from 'react-icons/fi';

const UpperNavbar = () => {
    return (
<div className="navbar p-0 flex-row-reverse  justify-evenly mx-auto  bg-base-100">
  <div className="">
    <span className='text-4xl flex gap-2 md:gap-14 '> 
    <IoPeopleSharp></IoPeopleSharp>
    <FiShoppingCart></FiShoppingCart>
    </span>
   
  </div>
  <div className="flex gap-3 lg:gap-80   flex-row-reverse">
    <div className="form-control">
  
  <div className="input-group ">
    <input type="text" placeholder="Search…" className=" lg:w-96 input input-bordered" />
    <button className="btn bg-[#FED700] btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>



    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="rounded-full">
          <img  className='rounded-2xl w-32 h-32' src={user} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default UpperNavbar;