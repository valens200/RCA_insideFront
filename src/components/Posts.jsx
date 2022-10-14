import React from 'react'
import { images } from '../assets/data'
function Posts() {
  return (
    <div className='flex  justify-around flex-wrap  '>
        {images.map((img, index) => (
            <img  className='mt-3' src={img}/>
        ))}
    </div>
  )
}

export default Posts