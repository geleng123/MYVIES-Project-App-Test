import React from "react";
import { Button } from "react-bootstrap";
import userImage from '../assets/background/user.png';
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="logo mb-4 md:mb-0">
              <Link to="/" className="text-2xl font-bold">MYVIES</Link>
          </div>
          <ul className="nav-links flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/" className="hover:text-gray-400">Movies</Link></li>
              <li><Link to="/" className="hover:text-gray-400">My List</Link></li>
              <li><Link to="/" className="hover:text-gray-400">Subscribe</Link></li>
              <li>
                  <form>
                      <input type="text" name="search" placeholder="Search" className="p-2 rounded"/>
                  </form>
              </li>
              <li><Link to="/WatchedList" className="hover:text-gray-400">Watched List</Link></li>
          </ul>
          <div className="btn mt-4 md:mt-0">
              <img src={userImage} alt="User" className="w-8 h-8 rounded-full"/>
          </div>
      </div>
  </header>
    )
}

export default Header
