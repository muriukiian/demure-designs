import Image from 'next/image'
import ComputerImage from '@/app/public/logo.jpg'
import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
        <div className='flex text-white'>
            <div className='flex bg-pink-500 h-[64px] justify-between w-[100%]'>
                <h2 className='font-bold text-2xl justify-center items-center mt-2 p-2'>Demure Designs</h2>
                <span className='mt-2 '>Contact us on
                    <p>
                        <a className='font-bold text-xl mr-2 hover:underline text-teal-900' href="mailto:demure-designs@gmail.com">
                            demure-designs@gmail.com
                        </a>
                    </p>
                </span>
            </div>
        </div>
        <div className='h-[200px] p-4'>
            <h3 className='font-bold text-lg'>Transform your online presence with Demure Designs.</h3>
            <span>At Demure Designs, we don’t just build websites—we create seamless, 
                user-centered digital experiences. With a focus on high-quality designs
                 that enhance usability, our expert team of engineers is ready to bring
                  your vision to life. Whether you need a new site or ongoing maintenance,
                   we deliver solutions that elevate your brand and engage your audience.
            </span>
            <h3 className='font-bold text-lg'>Ready to take your website to the next level? Contact us today on <a className='font-bold text-xl mr-2 hover:underline text-teal-900' href="mailto:demure-designs@gmail.com"> demure-designs@gmail.com</a> and let’s
                 build something amazing together!
            </h3>
            <span>Here is a brief sneak peek into our past 
                <Link href="/projects" className='font-bold hover:underline text-teal-500'> projects </Link>
                 that have already been delivered to our past select clients.
            </span><br/>
            <button className='bg-pink-500 rounded p-2 hover:bg-pink-700'>
                <Link href='/projects' className='font-bold text-white'>Demure Designs Project Portfolio.</Link>
            </button>
            <Image src={ComputerImage} alt='web developer nyc' className='h-100 p-4'/>

        </div>
    </div>
  )
}

export default HomePage