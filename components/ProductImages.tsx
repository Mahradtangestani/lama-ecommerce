'use client'

import Image from "next/image";
import { useState } from "react";

const images = [
    {id:1 , url:"/i1.webp"},
    {id:2 , url:"/i2.jpeg"},
    {id:3 , url:"/i3.jpeg"},
    {id:4 , url:"/i4.jpeg"},
]

const ProductImages = ()=>{
    
    const [index , setIndex] = useState(0)

    return (
        <div>
             <div className="h-[500px] relative">
                <Image src={images[index].url} alt="" sizes="50vw" fill className="object-cover rounded-md"/>
             </div>
             <div className="flex justify-between gap-4 mt-8">
                {images.map((img,i)=>(
                    <div key={img.id} className="relative w-1/4 h-32 gap-4 mt-8 cursor-pointer" onClick={()=>setIndex(i)}>
                        <Image src={img.url} alt="" sizes="30vw" fill className="object-cover rounded-md"/>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default ProductImages;