import React from 'react'
import Navbar from '../components/Navbar'
import HomeNav from '../components/HomeNav'
import image1 from '../assets/images/image1.jpg'
import students from '../assets/images/students.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import Notifications from '../components/Notifications'
import Chart from './Chart'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';  
import { buttons2 } from '../assets/data'
import { setSelectedUser } from '../features/UserSlice'
import { Link } from 'react-router-dom'
import {FaRegHeart, FaRegComment } from 'react-icons/fa'
import {BsCursor} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { baseUrl } from '../assets/data'
import axios from 'axios'
function ChartHome() {

    const posts = useSelector((store) => store.post.posts)
    const users = useSelector((store) => store.user.users);
    const numbers = [3,4,5,7,8,9,9];
    const dispatch = useDispatch();

    useEffect(() => {
        const getUsers = async() =>{
            try {
                await axios.get(baseUrl+"/users", {
                    headers:{
                        "Access-Control-Allow-Origin":"http://localhost:3000"
                    }
                }).then((result) => {
                    console.log(result)
                }).catch((error) => {
                    console.log(error)
                })
                
            } catch (error) {
                console.log(error)
                
            }
        }
        getUsers();
    })


  return (
    <div className='w-[100%]'>
        <div className='h-[10vh] fixed top-0 w-[100vw] z-20 bg-white'>
        <HomeNav />
        </div>
        <div className="flex md:w-[80%] w-[90%] mx-auto" >
            <div className='bg-black text-white   top-0 fixed mx-auto w-[20%]'>
                <p>helo</p>
            </div>
            <div className='h-[100vh]   md:w-[70%]  mx-auto flex flex-row  justify-center   items-center '>
            <div className='md:w-[80%]  overfolow-y-scroll space-y-8  h-[100%] flex  space-x-2 flex-col mx-auto'>
                    <div className='h-[50vh] my-4 w-[90%] mx-auto border text-black bg-black'>
                        <p>lore</p>
                    </div>
                {posts.map((post, index) => (
                <div key={index} className='md:w-[60%]  border p-4 h-[80%] mx-auto'>
                <div  className='w-[100%]  flex'>
                        <img className="w-[9%]  h-[10%] rounded-full" src={post.postOwnerImg}/>
                        <p>{post.postOwner}</p>
                    </div>
                    <p>{post.postDescription}</p>
                    <div className='w-[100%] mt-4 w-[100%] '>
                        <img className='w-[100%] h-[100%]' src={students} alt="rca students" />
                    </div> 

                    <div className='flex flex-col space-y-5'>
                        <div className='flex mt-2 text-[1.4rem] space-x-4'>
                            <FaRegHeart/>
                            <FaRegComment />
                            <BsCursor />
                        </div>
                        <div className='flex'>
                            <textarea  className='border w-[80%] focus:outline-0' id="" cols="28" rows="2" />
                            <button className='bg-[#0B0B45] text-white w-[20%]' >post</button >
                        </div>
                        <div className='w-[100%] flex space-x-3 flex-row'>
                            <img className='w-[10%] rounded-full  h-[10%]' src={image1}/>
                            <p className='items-center translate-y-[8%] text-center '>Liked by murangwa and 239 others</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
                <div className='w-[30%] hidden md:grid   overflow-y-scroll  grid items-center fixed right-0 bg-white bottom-0  h-[100%]'>
             <div className='flex pt-20 flex-col space-y-9 w-[90%] mx-auto '>
                {/* <Link to="/user">
                {numbers.map((numbre, index) => (
                    <div>
                        <h1 className='text-center text-[grey] pb-2'>Suggestions for you</h1>
                        {users.map((post, index) => (
                    <div className='w-[100%] flex   border p-4 h-[80%] mx-auto'>
                    <div className='w-[100%] flex'>
                            <img className="w-[15%]  h-[100%] rounded-full" src={post.userImage}/>
                            <p>{post.userName}</p>
                        </div>
                        <div className='w-[50%] h-[100%] ' >
                            <button className='bg-[#00008B] h-[3vh]  rounded hover:bg-white hover:text-[#00008B] hover:border text-white  font-bold w-[70%] '>Follow</button>
                        </div>
                    </div>
                    ))}
                    </div>
                    
                ))}
                </Link> */}

                    </div>





            </div>
                    
                </div>
        </div>
    </div>
  )
}

export default ChartHome