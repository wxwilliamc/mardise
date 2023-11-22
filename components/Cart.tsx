"use client"

import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Cart = () => {

    const itemCount = 0
    const fee = 1
    const router = useRouter();

  return (
    <Sheet>
        <SheetTrigger className='group -m-2 flex items-center p-2'>
            <ShoppingCart className='w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-purple-500 transform duration-200'/>

            <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-purple-700'>
            {/* TODO: Dynamic Data */}
                0
            </span>
        </SheetTrigger>

        <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
            <SheetHeader className='space-y-2.5 pr-6'>
                <SheetTitle>
                {/* TODO: Dynamic Data */}
                    Cart (0)
                </SheetTitle>
            </SheetHeader>

            {/* We have something in cart */}
            {itemCount > 0 ? (
                <>
                    <div className='flex w-full flex-col pr-6'>
                        {/* TODO: Dynamic Data */}
                        cart items
                    </div>

                    <div className='space-y-4 pr-6'>
                        <Separator />

                        <div className='space-y-1.5 text-sm'>
                            <div className='flex'>
                                <span className='flex-1'>
                                    Shipping
                                </span>

                                <span>
                                    Free
                                </span>
                            </div>

                            <div className='flex'>
                                <span className='flex-1'>
                                    Transaction Fee
                                </span>

                                <span>
                                    {formatPrice(fee)}
                                </span>
                            </div>

                            <div className='flex'>
                                <span className='flex-1'>
                                    Total
                                </span>

                                <span>
                                    {formatPrice(fee)}
                                </span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href='/cart' className={buttonVariants({ className: 'w-full '})}>
                                    Continue to Checkout
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                </>
            ) : (
            // Empty Cart
                <>
                    <div className='flex h-full flex-col items-center justify-center space-y-2 '>

                        <div className='text-xl font-semibold'>
                            Your cart is empty right now...
                        </div>

                        <SheetTrigger asChild>
                            <Link href='/products' className={buttonVariants()}>
                                Add items to your cart
                            </Link>
                        </SheetTrigger>

                        <div className='relative'>
                            <Image 
                                src='/empty__cart.png'
                                alt="empty cart"
                                width={350}
                                height={350}
                                className='object-contain'
                            />
                        </div>
                    </div>
                </>
            )}
        </SheetContent>
    </Sheet>
  )
}

export default Cart