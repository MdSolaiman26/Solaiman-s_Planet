import { Button, Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header() {
  const path = useLocation().pathname
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Navbar
      fluid={true}
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <span className="self-center text-xl font-semibold whitespace-nowrap">
           <Link to="/" className="text-white bg-blue-600 px-3 py-1 rounded-md font-bold">
              Solaiman's Planet
            </Link>
          </span>

          {/* Hamburger menu button - visible on small screens */}
          {/* Moved below Sign Up button */}

          {/* Navigation Links */}
         <div className="hidden md:flex items-center gap-6 ml-6" >
            <Link
              to="/"
              className={`font-medium ${path === '/' ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium ${path === '/about' ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`font-medium ${path === '/projects' ? 'text-blue-600' : 'text-white'} hover:text-blue-600`}
            >
              Projects
            </Link>
          </div>

          {/* Large screen search bar */}
          <div className="hidden sm:flex justify-center flex-grow mx-4">
            <form className="flex items-center max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className=" px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-base"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-white text-blue-500 rounded-r-lg hover:bg-gray-100"
              >
                <AiOutlineSearch size={25} />
              </button>
            </form>
          </div>

          {/* Right side items */}
          <div className="flex items-center ml-auto gap-2">
            <FaMoon className="text-3xl cursor-pointer text-gray-600 hover:text-yellow-400 transition-colors duration-200 bg-gray-200 p-2 rounded-md hover:bg-gray-300" />

            <Link to="/signin">
              <Button className="ml-2 sm:ml-3 text-[12px] px-[2px] py-[0.5px] sm:text-xs sm:px-2 sm:py-1 w-auto" color="light" bg="blue-500" hoverBg="blue-600">
                Sign In
              </Button>
            </Link>
            
            <Link to="/signup"> 
                <Button className="ml-2 text-[12px] px-[2px] py-[0.5px] sm:text-xs sm:px-2 sm:py-1 w-auto" color="light" bg="blue-500" hoverBg="blue-600">
                    Sign Up
                </Button>
            </Link>

            {/* 3-dot menu button - visible on small screens */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-2xl text-white hover:text-blue-600 ml-1"
            >
              {isOpen ? <AiOutlineClose size={28} /> : <GiHamburgerMenu size={28} />}
            </button>

            {/* Mobile Navigation Menu - Below Sign Up */}
            {isOpen && (
              <div className="md:hidden fixed right-0 bg-white shadow-lg rounded-bl-lg p-4 flex flex-col gap-3 z-50 min-w-[200px]" style={{top: '4.5rem'}}>
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Small screen search bar - below brand */}
        <div className="sm:hidden flex w-full mt-2 max-w-[150px]">
          <form className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-2 py-1 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-sm"
            />
            <button
              type="submit"
              className="px-1 py-1 bg-white text-blue-500 rounded-r-md hover:bg-gray-100"
            >
              <AiOutlineSearch size={22} />
            </button>
          </form>
        </div>
      </div>
    </Navbar>
  )
}