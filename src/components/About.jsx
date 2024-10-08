import React from 'react'

const About = () => {
  return (
    <div className='w-full p-16 bg-[#CDEA68] rounded-tl-lg rounded-tr-lg text-black'>
        <h1 className='text-[3vw] leading-[3.5vw] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='flex gap-5 w-full border-t-[1px] pt-8 border-[#81a00f] mt-8'>
            <div className='w-1/2 '>
                <h1 className='text-7xl '>Our approach: </h1>
                <button className='flex uppercase gap-6 items-center px-8 mt-6 p-4 bg-zinc-900 rounded-full text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'>
                    </div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] bg-[#b0c859] overflow-hidden rounded-2xl '>
            <img src="https://images.unsplash.com/photo-1654755149473-ac55a92f0654?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About