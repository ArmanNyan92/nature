import React from 'react'
import "./Images.css"

export default function Images() {
	const img1 = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg"
	const img2 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
	const img3 = "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg"
	const img4 = "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
	const img5 = "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"
	const img6 = "https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_640.jpg"
	const img7 = "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg"
	const img8 = "https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_640.jpg"

  return (
	<div className='img-div'>
		<div className='img-cont'>
			<img width="500px" height="300px" src={img1} alt='img1'/>
		</div>
		<div className='img-cont'>
		  <img width="500px" height="300px" src={img2} alt='img1' />
		</div>
		  <div className='img-cont'>
			  <img width="500px" height="300px" src={img3} alt='img1' />
		  </div>
		  <div className='img-cont'>
			  <img width="500px" height="300px" src={img4} alt='img1' />
		  </div>
		  <div className='img-cont'>
			  <img width="500px" height="300px" src={img5} alt='img1' />
		  </div>
		  <div className='img-cont'>
			  <img width="500px" height="300px" src={img6} alt='img1' />
		  </div>
		  <div className='img-cont'>
			  <img width="500px" height="300px" src={img7} alt='img1' />
		  </div>
		  <div className='img-cont'>
			  <img width="500px" height="300px" src={img8} alt='img1' />
		  </div>
	</div>
  )
}
