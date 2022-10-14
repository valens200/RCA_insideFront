import React from 'react'
import logo from '../assets/images/inside.png'
import { buttons } from '../assets/data'
import { Link } from 'react-router-dom'
function Notifications() {
  const getclass = (btn) => {
    if(btn == 'Login'){
      return 'border p-2 hover:bg-black hover:text-white font-bold w-[40%] '

    }else{
      return 'bg-black text-white p-2 rounded font-bold hover:bg-white hover:text-black hover:border w-[40%]'

    }
  }
  return (
    <div className='shadow-lg  grid items-center  h-[8vh] w-[100%]'>
        <div className='flex h-[100%] w-[90%]  mx-auto justify-between'>
          <div className='w-[30%] text-start  h-[100%]'> 
          <img  className='w-[20%] h-[98%]' src={logo} alt="" />
          </div>
          <div className='flex h-[100%] w-[30%]  space-x-4  float-rignt flex items-center flex-row'>
              <div>
                <p>Inside your friends</p>
              </div>
              <div className='flex w-[50%] flex-row space-x-4'>
                {buttons.map((btn, index) => (
                  <Link to={btn} className={getclass(btn)}>
                  <button className='w-[100%] h-[100%]' key={index}>{btn}</button>
                  </Link>
                ))}
              </div>
          </div>
          
        </div>
    </div>
  )
}

export default Notifications