import React from 'react'
import Video from '../components/Home/Video'
import ToHomeHeroText from '../components/Home/ToHomeHeroText'
import ButtomText from '../components/Home/ButtomText'

const Home = () => {
    return (
        <div className='text-white '>
            <div className='h-screen w-screen fixed text-white '>
                <Video />

            </div>
            <div className='h-screen w-screen overflow-hidden pb-5  relative flex flex-col justify-between'>
                <ToHomeHeroText />
                <ButtomText />
            </div>
        </div>
    )
}

export default Home
