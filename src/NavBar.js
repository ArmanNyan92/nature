import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'
import { ImHome3 } from 'react-icons/im'
import { FaVideo } from "react-icons/fa"
import { ImImages } from "react-icons/im"

export default function NavBar() {
  return (
	<div>
		<nav className='navhimn'>
			<ul className='ulnav'>
				<li>
					  <NavLink className={({isActive}) => isActive && "act"} to="/"> <ImHome3 /> </NavLink>
				</li>
				<li>
					  <NavLink className={({isActive}) => isActive && "act"} to="/video"><FaVideo /></NavLink>
				</li>
				<li>
					  <NavLink className={({isActive}) => isActive && "act"} to="/images"><ImImages /></NavLink>
				</li>
			</ul>
		</nav>
	</div>
  )
}
