import React from 'react';
import { FaBell } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <span className='text-blue-600'>Auction</span><span className='text-yellow-400 font-bold'>Gallery</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li> 
        
          <a>Auction</a>
        
      </li>
      <li><a>Categories</a></li>
      <li><a>How to works</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <FaBell className='text-xl' />
  <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;