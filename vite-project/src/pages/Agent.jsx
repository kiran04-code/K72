import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Agent = () => {
    const imageDiv = useRef(null)
    const imageDiv2 = useRef(null)


    const imageArry = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.to(imageDiv.current, {
            scrollTrigger: {
                trigger: imageDiv.current,
                start: 'top 20%',
                end: "top -120%",
                pin: true,
                scrub: true,
                onUpdate: function (element) {
                    const imageindex = Math.floor(element.progress * imageArry.length)
                    imageDiv2.current.src = imageArry[imageindex]
            
                }
            }
        })
    })


    return (
        <div>
            <div className='section1 '>
                <div ref={imageDiv} className='absolute top-30  left-[30vw]  h-[20vw] w-[15vw] rounded-3xl overflow-hidden'>
                    <img ref={imageDiv2} src={imageArry[0]} className=' h-full w-full object-cover' alt="" />
                </div>
                <div className='relative mt-[50vh]' >
                    <h1 className='text-[20vw] uppercase leading-[18vw] font-bold text-center'>   Soixan7e
                        Douze</h1>
                </div>
                <div className='flex pl-[50%] mt-20'><p className='text-3xl font-bold'>

                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
                    Expertise

                    Stratégie</p></div>
            </div>
            <div className='section2 h-screen'>

            </div>
        </div>

    )
}

export default Agent
