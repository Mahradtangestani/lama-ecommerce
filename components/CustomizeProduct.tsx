const CustomizeProduct = ()=>{
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">Choose a color</h4>
            <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                    <div className="absolute h-10 w-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">  
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
                    <div className="absolute h-[2px] bg-red-400 rotate-45 w-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </li>
            </ul>
            <h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 ring-red-500 text-red-500 rounded-md py-1 px-4 cursor-pointer">Small</li>
                <li className="ring-1 ring-red-500 text-white bg-red-500 rounded-md py-1 px-4 cursor-pointer">Medium </li>
                <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 cursor-not-allowed">Large</li>
            </ul>
        </div>
    )
}
export default CustomizeProduct;