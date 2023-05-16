import React from 'react'
import "./App.css"
import NavBar from './NavBar'
import { Route, Routes} from 'react-router-dom'
import Home from "./project/Home"
import Video from "./project/Video"
import Images from "./project/Images"


export default function App() {
  return (
	<div className='himncont'>
		<NavBar/>
		<Routes>
				  <Route path='/' element={<Home />} />
				  <Route path='/video' element={<Video />} />
				  <Route path='/Images' element={<Images />} /> 
		</Routes>
	</div>
  )
}
