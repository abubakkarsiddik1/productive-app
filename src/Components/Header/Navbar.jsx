import { Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
    <Link to={'/'} className='m-2'>Home</Link>
        <Link to={'/all-apps'} className='m-2'>Apps</Link>
        <Link to={'/installed-app'} className='m-2'>Installation</Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" fill="none" 
        viewBox="0 0 24 24" stroke="currentColor"> 
        <path strokeLinecap="round" strokeLinejoin="round" 
        strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
        </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <img width={20} src="./logo.png" alt="Logo" />
    <a className="btn btn-ghost text-xl">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    
    <a className="btn bg-transparent bg-clip bg-gradient-to-r from-[#8452e9] to-[#9e69f0] p-2 rounded-xl text-white text-2xl" 
    href='https://github.com/abubakkarsiddik1'> <Github></Github>
      Contribute
    </a>
  </div>
</div>
    );
};

export default Navbar;