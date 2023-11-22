import React from 'react'
import Container from './Container'
import Link from 'next/link'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Cart from './Cart'

const Navbar = () => {

    const user = null

  return (
    <nav className='sticky z-60 bg-white top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
            <Container>
                <div className='border-b border-purple-100'>
                    <div className='flex h-16 items-center'>
                        {/* TODO: Mobile Navbar */}
                    
                        <div className='ml-4 flex lg:ml-0'>
                            <Link href='/'>
                                <span className='font-bold tracking-widest text-xl hover:bg-purple-600 px-4 py-2 rounded-lg transform duration-300 hover:text-white text-purple-600'>
                                    MarDise
                                </span>
                            </Link>
                        </div>

                        <div className='hidden z-60 lg:ml-8 lg:block lg:self-stretch'>
                            <NavItems />
                        </div>

                        <div className='ml-auto flex items-center'>
                            <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>

                                {/* Hidden - If Logged In | Sign In */}
                                {user ? null : (
                                    <Link href='/sign-in' className={buttonVariants({variant: 'ghost'})}>
                                        Sign In
                                    </Link>
                                )}

                                {/* Separator */}
                                {user ? null : (
                                    <span className='h-6 w-px bg-purple-200' aria-hidden="true"/>
                                )}

                                {/* Logged In - Show user details | Not Login - Create Account */}
                                {user ? <p>

                                </p> : (
                                    <Link href="/sign-up" className={buttonVariants({ variant: 'ghost'})}>
                                        Create Account
                                    </Link>
                                )}

                                {/* Logged In - Separator */}
                                {user ? (
                                    <span className='h-6 w-px bg-purple-200' aria-hidden="true"/>
                                ) : null}

                                {/* Not Login - Separator */}
                                {user ? null : (
                                    <div className='flex lg:ml-6'>
                                        <span className='h-6 w-px bg-purple-200' aria-hidden="true"/>
                                    </div>
                                )}

                                {/* Cart */}
                                <div className='ml-4 flow-root lg:ml-6'>
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    </nav>
  )
}

export default Navbar