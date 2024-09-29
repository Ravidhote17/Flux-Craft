import { style } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'


const Eyes = () => {

    const [rotate, setRotate] = useState(0)



    useEffect(()=>{
        window.addEventListener("mousemove", ((e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX- window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
            setRotate(angle-180)
        }))
    })

  return (
    <div className='w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute top-1/2 left-1/2 gap-10 -translate-x-[50%] -translate-y-[50%] flex'>
                <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100 '>
                    <div className='relative w-1/2 h-1/2 rounded-full bg-black'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className= 'line absolute top-1/2 left-1/2 gap-10 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                            <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-100'>
                    <div className='relative w-1/2 h-1/2 rounded-full bg-black'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 gap-10 -translate-x-[50%] -translate-y-[50%] w-full h-8'>
                            <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes

