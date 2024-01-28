import React from 'react'

function Background() {
  return (
    <>
    <div className='w-full h-screen z-index[2] fixed'>
    <div className='w-full py-10 top-[5%] flex justify-center text-zinc-500 font-semibold text-xl'>Documents</div>
      <h1 className='absolute top-1/4 left-1/4 translate-x-[50%] translate-y  -[60%] text-[10vw] tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
    </div>
    
    </>
  )
}

export default Background