import React from 'react'
import ReactPlayer from 'react-player'
import "./Video.css"

export default function Video() {
	const video1 = "https://cdn.pixabay.com/vimeo/197634410/Stars%20-%206962.mp4?width=640&hash=02325c562fdbeafad193c1004773d858ba0040c5"
	const video2 = "https://cdn.pixabay.com/vimeo/292228405/Birch%20-%2018420.mp4?width=1280&hash=238d94b2b2c48e741851890743a60db2bb9c996a"
	const video3 = "https://cdn.pixabay.com/vimeo/250154065/Sea%20-%2013704.mp4?width=640&hash=938eb4d86deff45affa1b23e472b0223a4a4041a"
	const video4 = "https://cdn.pixabay.com/vimeo/151167947/Cliff%20-%201890.mp4?width=640&hash=ae3003b4305d0bdc03a3efb89f4b7c3e47b9ae77"
	const video5 = "https://cdn.pixabay.com/vimeo/255658030/River%20-%2014205.mp4?width=640&hash=1f1d41eb10e012a42372880d1f4ac6258a929260"
	const video6 = "https://cdn.pixabay.com/vimeo/371345147/Fall%20-%2028746.mp4?width=1366&hash=1cbd9129372320e3e0164be3f064564f67ab835d"
  return (
	<div className='videocont'>
		<div className='vid'>
			  <ReactPlayer controls width="500px" height="300px" url={video1}/>
		</div>
		<div className='vid'>
			<ReactPlayer controls width="500px" height="300px" url={video2}/>
		</div>
		<div className='vid'>
			<ReactPlayer controls width="500px" height="300px" url={video3} />
		</div>
		<div className='vid'>
			<ReactPlayer controls width="500px" height="300px" url={video4} />
		</div>
		<div className='vid'>
			<ReactPlayer controls width="500px" height="300px" url={video5} />
		</div>
		<div className='vid'>
			<ReactPlayer controls width="500px" height="300px" url={video6} />
		</div>
	</div>
  )
}
