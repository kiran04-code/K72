import React from 'react'
import { Link } from 'react-router-dom'

const ButtomText = () => {
    return (
        <div className='flex justify-center gap-2 '>
            <div className='border-3 h-25 pb-4 justify-center items-center flex px-10 border-white rounded-full uppercase hover:text-[#d3ff44] '>
                <Link to={"/Project"} className='text-[6vw] mt-6  ' >Project</Link>
            </div>
            <div className='border-3  h-25 pb-4 justify-center items-center flex px-10 border-white rounded-full uppercase hover:text-[#d3ff44] '>
                <Link to={"/Agent"} className='text-[6vw] mt-6  ' >Agence</Link>
            </div>
          
        </div>
    )
}

export default ButtomText
