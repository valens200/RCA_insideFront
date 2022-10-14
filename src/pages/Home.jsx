import React from 'react'
import Navbar from '../components/Navbar'
import '../index.css'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className=' '>
        <Navbar />
        <div className='  main  grid items-center h-[92vh] '>
            <div className='container font-bold backdrop-brightness hello w-[50%] mx-auto text-white'>
                <h1 className='text-[2.5rem]'>RCA INSIDE</h1>
                <p>this an online social media designed for educational purpose to help RCA students to communicate easily</p>
                <div className='w-[100%] flex flex-col space-y-4 mx-auto text-[2rem]'>
                  <p>Please join and Inside your friends</p>
                  <button className='bg-black w-[20%] rounded text-white'>Join</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home