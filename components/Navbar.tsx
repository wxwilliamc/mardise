import React from 'react'
import Container from './Container'
import Link from 'next/link'
import NavItems from './NavItems'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='sticky z-60 bg-white top-0 inset-x-0 h-20'>
        <header className='relative bg-white'>
            <Container>
                <div className='border-b border-purple-200'>
                    <div className='flex h-20 items-center'>
                        {/* TODO: Mobile Navbar */}
                    
                        <div className='ml-4 flex lg:ml-0'>
                            <Link href='/'>
                                <span className='font-bold tracking-widest text-xl hover:bg-purple-600 p-4 rounded-lg transform duration-300 hover:text-white text-purple-600'>
                                    MarDise
                                </span>
                            </Link>
                        </div>

                        <div className='hidden z-60 lg:ml-8 lg:block lg:self-stretch'>
                            <NavItems />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    </nav>
  )
}

export default Navbar