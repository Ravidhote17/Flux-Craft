import React from 'react'

const Features = () => {
  return (
    <div className='w-full py-16'>
        <div className='w-full px-16 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-6xl tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-16'>
        <div className="cards w-full flex gap-10 mt-10">
            <div className="cardContainer  w-1/2 h-[80vh] ">
                <div className="card w-full rounded-xl h-full overflow-hidden">
                    <img src="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div className="cardContainer rounded-xl w-1/2 h-[80vh]">
                <div className="card w-full rounded-xl h-full overflow-hidden">
                    <img className='h-full w-full bg-cover' src="https://media.istockphoto.com/id/2156717408/photo/3d-illustration-of-city-and-urban-in-kathmandu-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=7V93ju5mss3Ewl4raTqMqnRTRrvSnckaS-aVSTbvw7o=" alt="" />
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Features