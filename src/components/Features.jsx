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
                <div className="card w-full mt-12 rounded-xl h-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1614016296767-63446ab979c7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div className="cardContainer rounded-xl w-1/2 h-[80vh]">
                <div className="card w-full mt-12 rounded-xl h-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1614015974995-301bb2479385?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
        </div>
        {/* <hr /> */}
    </div>
  )
}

export default Features