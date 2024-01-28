import React from 'react'
import Card from './Card'

function Foreground() {
  const data  = [
    {desc:"Lorem ipsum, dolor sit amet consectetur adipisicing", filesize:".9mb", close:true,  tag:{isOpen: false}}
  ]
  return (
    <div className='w-full h-full  z-index[3] top-0 left-0'>
       <Card />
       <Card />
       <Card />
    </div>
  )
}

export default Foreground