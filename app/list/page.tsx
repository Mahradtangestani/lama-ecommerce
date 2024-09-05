import Image from "next/image";

const ListPage = ()=>{
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            <div className="bg-pink-50 px-4 flex justify-between h-64">
                <div className="w-2/3 flex flex-col justify-center items-center gap-8">
                  <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grap up to 50% of on <br /> Selected Products</h1>
                  <button className="rounded-3xl bg-red-500 text-white text-sm w-max py-3 px-5 hover:bg-white hover:text-red-500 hover:ring-1 hover:ring-red-500 hover:rounded-3xl">Buy Now</button>
                </div>
                <div className="relative w-1/3">
                    <Image src={'/woman.png'} alt="" fill className="object-contain"/>
                </div>
            </div>
        </div>
    )
}

export default ListPage;