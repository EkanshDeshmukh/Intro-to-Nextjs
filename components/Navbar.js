import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-red-200 flex items-center justify-center gap-10 p-10'>
            <Link href='/'>Home</Link>
            <Link href='/product'>Product</Link>
            <Link href='/about'>About</Link>


        </div>
    )
}

export default Navbar