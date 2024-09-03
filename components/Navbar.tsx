import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* MOBILE SIZE */}
            <div className="h-full flex justify-between items-center md:hidden">
                <Link href={"/"} className="flex items-center gap-3">
                   <Image src="/logo.png" alt="" width={24} height={24}/>
                   <div className="text-2xl tracking-wide">LAMA</div>
                </Link>
                <Menu />
            </div>

            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between h-full gap-8">
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href={"/"} className="flex items-center gap-3">
                        <Image src="/logo.png" alt="" width={24} height={24}/>
                        <div className="text-2xl tracking-wide">LAMA</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href={"/"}>HomePage</Link>
                        <Link href={"/"}>Shop</Link>
                        <Link href={"/"}>Deals</Link>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Contract</Link>
                    </div>
                </div>
                <div className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
                    <SearchBar/>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;