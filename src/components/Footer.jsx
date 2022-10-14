import React from 'react'
import { footerLinks } from '../assets/data'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div  className='w-[100%] items-center text-[grey]  flex flex-row w-[90%] mx-auto justify-between h-[100%]'>
        <div className='text0.70rem]'>
            <h1>QUick links</h1>
        <ul className='flex mt-2 flex-col space-y-2'>
        {footerLinks.QuickLinks.map((link, index) => (
            <li  className="hover:underline"key={index}>{link}</li>  
        ))}
        </ul>
        </div>
        <div className='text0.70rem]'>
        <h1>Contacts</h1>
        <ul className='flex mt-2 flex-col space-y-2'>
        {footerLinks.contacts.map((link, index) => (
            <li className='hover:underline' key={index}>{link}</li>  
        ))}
        </ul>
        </div>
        <div className='w-[40%] h-[100%]'>
        <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe"  className =" w-[100%] h-[100%] " frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=850&amp;height=400&amp;hl=en&amp;q=Rwanda coding academy&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://mcpenation.com/">MCPE Nation</a></div><style></style></div>
        </div>
    </div>
  )
}

export default Footer