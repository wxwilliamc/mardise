"use client"

import { PRODUCT_CATEGORIES } from "@/constants";
import { useRef, useState, useEffect } from "react"
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
    
    const [isActive, setIsActive] = useState<number | null>(null);
    const isAnyOpen = isActive !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setIsActive(null))

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if(e.key === 'Escape'){
                setIsActive(null)
            }
        }

        document.addEventListener('keydown', handler)

        return () => {
            document.removeEventListener("keydown", handler)
        }

    }, [])

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, index) => {

            const handleOpen = () => {
                if(isActive === index){
                    setIsActive(null)
                } else {
                    setIsActive(index)
                }
            }

            const isOpen = index === isActive

            return (
                <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={index} isAnyOpen={isAnyOpen}/>
            )
        })}
    </div>
  )
}

export default NavItems