import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Staire = ({children}) => {
      const  refdev = useRef(null)
      const  pageref = useRef(null)
      const chnagepath = useLocation().pathname
      console.log(chnagepath)
  useGSAP(function () {
    const tl = gsap.timeline()
    tl.to(refdev,{
      display:"block"
    })
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.2
      }
    })
    tl.to(".stair", {
      y: '100%',
      stagger: {
        amount: -0.2
        
      },
    })
    tl.to(refdev.current,{
          display:"none"
    })

  },[chnagepath])
  return (
 <div>
      <div ref={refdev} className=' w-full h-screen z-40  fixed top-0'>
        <div className=' flex w-full h-screen '>
          <div className='stair   h-full w-1/5 bg-black'></div>
          <div className='stair   h-full w-1/5 bg-black'></div>
          <div className='stair   h-full w-1/5 bg-black'></div>
          <div className='stair   h-full w-1/5 bg-black'></div>
          <div className='stair   h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div  ref={pageref}>
        {
            children
        }
      </div>
 </div>
  )
}

export default Staire
