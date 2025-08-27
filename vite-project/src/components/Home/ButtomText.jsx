import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ButtomText = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center gap-4'>
            <Link
                to="/Project"
                className='flex items-center justify-center px-10 h-[6.25rem] border-[3px] border-white rounded-full uppercase text-[6vw] cursor-pointer hover:text-[#d3ff44]'
            >
                Project
            </Link>

            <span
                onClick={()=>navigate("/Agent")}
                className='flex items-center justify-center px-10 h-[6.25rem] border-[3px]   border-white rounded-full uppercase text-[6vw] cursor-pointer hover:text-[#d3ff44]'
            >
                Agence
            </span>
        </div>
    )
}

export default ButtomText
