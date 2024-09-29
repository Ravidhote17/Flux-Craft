// import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-10 rounded-tl-lg rounded-tr-lg bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex space-x-2 overflow-hidden whitespace-nowrap'>
        <h1 className='text-[12vw] leading-none font-bold tracking-tighter uppercase'>we are ochi</h1>
        <h1 className='text-[12vw] leading-none font-bold tracking-tighter uppercase'>we are ochi</h1>
        {/* <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[12vw] leading-none font-bold tracking-tighter uppercase'>we are ochi</motion.h1> */}
        {/* <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[12vw] leading-none font-bold tracking-tighter uppercase'>we are ochi</motion.h1> */}
      </div>

    </div>
  )
}

export default Marquee