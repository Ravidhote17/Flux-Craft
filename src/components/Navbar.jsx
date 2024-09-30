import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex justify-between item-center'>
        <h3 className='font-semibold text-2xl'>fluxCraft</h3>
        <div className='flex gap-10'>
            {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index)=>(
                <a key={index} className={`text-md capitalize font-md text-white ${index===4 && "ml-24"}`}>{item}</a>
            ))}
        </div>
        
    </div>
  )
}

export default Navbar