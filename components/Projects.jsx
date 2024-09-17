import Image from 'next/image'
import AgapeImage from '@/app/public/project1.png'
import DemureImage from '@/app/public/project2.png'
import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
        <div className=''>
            <div className='p-2 w-[100%] bg-white'>
                <h2 className='font-bold text-xl'>Agape web application</h2>
                <span>Click the link below to access the web application project</span><br/>
                <Link href='https://agape-delta.vercel.app/' className='underline hover:font-bold'>https://agape-delta.vercel.app/</Link>
                <Link href='https://agape-delta.vercel.app/'><Image src={AgapeImage} alt='web developer new jersey, web dev near me' className='h-[400px]'/></Link>
                <p>
                This ReactJS web application dynamically renders AI-generated content, delivering a seamless 
                and personalized user experience. The design features a clean, modern interface with a card-based
                layout, ensuring content is well-organized and easy to navigate. Interactive elements and 
                responsive components adapt to various devices, providing fluid transitions and real-time 
                content updates without page reloads.
                The app&#39;s robust session management uses secure authentication
                (JWT or OAuth) and token persistence, allowing users to log in, access
                personalized dashboards, and resume sessions across devices. 
                Session states, such as user preferences and input data, are synchronized 
                in real-time, enhancing usability.
                AI-driven content is tailored to individual preferences, 
                offering personalized recommendations and interactive responses. 
                Loading indicators and skeleton screens ensure a smooth experience even during AI processing.
                    The app prioritizes accessibility, responsive design, and security, making it a dynamic,
                    user-friendly platform for personalized content consumption.
                </p>
            </div>
            <div className='p-2 w-[100%] bg-white'>
                <h2 className='font-bold text-xl'>Demure Designs</h2>
                <Link href='https://agape-delta.vercel.app/' className='underline hover:font-bold'>https://agape-delta.vercel.app/</Link>
                <Image src={DemureImage} alt='web designers near me' />
            </div>
        </div>       
  )
}

export default Projects