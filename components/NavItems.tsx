"use client"

import { PRODUCT_CATEGORIES } from "@/constants";
import { useState } from "react"
import NavItem from "./NavItem";


const NavItems = () => {
    
    const [isActive, setIsActive] = useState<number | null>(null);
    const isAnyOpen = isActive !== null

  return (
    <div className="flex gap-4 h-full">
        {PRODUCT_CATEGORIES.map((category, index) => {

            const handleOpen = () => {
                if(isActive === index){
                    setIsActive(null)
                } else {
                    setIsActive(index)
                }
            }

            const isOpen = index === isActive

            // TODO: Close Nav dropdown if click on empty area

            return (
                <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={index} isAnyOpen={isAnyOpen}/>
            )
        })}
    </div>
  )
}

export default NavItems