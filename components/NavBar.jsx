import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className=' sticky top-0 flex justify-between bg-teal-400 ' >
        <div className='p-4'>
            <h2 className='text-white font-bold text-2xl'>Demure Designs</h2>
        </div>
        <div className='p-4'>
            <input type='text' id='text' name='text' placeholder='Search' className='p-2 border border-gray-500 w-96 rounded' />
            <button className='p-2 bg-green-300 hover:bg-green-500 ml-4 rounded'>Search</button>
        </div>
        <div className='p-4'>
            <h2 className='text-white font-semibold text-xl'>
                <Link href='/about us'>About us</Link>
            </h2>
        </div>
    </nav>
  )
}

export default NavBar