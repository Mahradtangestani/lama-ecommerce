"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";

const NavIcons = ()=>{
    
    const [isProfileOpen , setIsProfileOpen] = useState(false)
    const [isCartOpen , setIsCartOpen] = useState(false)


    const router = useRouter()

    const isLoggedIn = false

    const handleProfile = ()=>{
       if(!isLoggedIn){
          router.push("/login")
       }
       setIsProfileOpen(prev=>!prev)
    }
    



    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src={"/profile.png"} alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
             {isProfileOpen && (
                <div className="absolute p-4 top-12 left-0 text-sm rounded-md shadow-lg z-20">
                    <Link href={"/"}>Profile</Link>
                    <div className="cursor-pointer mt-2">Logout</div>
                </div>
             )}
            <Image src={"/notification.png"} alt="" width={22} height={22} className="cursor-pointer"/>
            
     
            <div className="relative cursor-pointer" onClick={()=>setIsCartOpen(prev=>!prev)}>
              <Image src={"/cart.png"} alt="" width={22} height={22}/>
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 text-white text-sm rounded-full flex justify-center items-center">2</div>
            </div>
        
            {isCartOpen && <CartModal/>}
 
        </div>
    )
}
export default NavIcons;





