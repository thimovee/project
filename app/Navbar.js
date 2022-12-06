'use client'
import {BsBag} from "react-icons/bs"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="px-20 md:px-35 lg:px-50">
                <nav className="py-12 mb-12 flex justify-between  mx-auto ">
                    <Link href="/"><h1  className="text-white text-2xl font-itim font-bold cursor-pointer">Vinyl</h1></Link>
                    <li className="list-none ml-auto">
                        {open ?
                            <button onClick={() => setOpen(prevState => !prevState)} className="md:hidden sm:flex z-50 h-9 w-9 flex items-center justify-center focus:rotate-90 transition duration-700 ease-in-out">
                                <svg className=" h-6 w-6   text-gray-100" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shape-rendering="geometricPrecision" data-hide="false"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
                            </button> :
                            <button onClick={() => setOpen(prevState => !prevState)} className="md:hidden sm:flex z-50 h-9 w-9 flex items-center justify-center focus:-rotate-180 transition duration-700 ease-in-out">
                                <svg className=" h-6 w-6  text-gray-100" width="20" height="20" viewBox="0 0 20 20" fill="none" data-hide="false"><path d="M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.5 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                        }
                    </li>
                    <ul className="flex items-center text-gray-500">
                        <Link style={{ color: pathname == "/marketplace" ? "white" : "" }} href="/marketplace" className=" hover:text-gray-500  hidden md:inline-block hover:scale-105 transform transition duration-300 font-semibold">Marketplace</Link>
                        <Link style={{ color: pathname == "/community" ? "white" : "" }} href="/community"className="mx-20 hover:text-gray-500 hidden md:inline-block hover:scale-105 transform transition duration-300 font-semibold">Community</Link>
                        <Link style={{ color: pathname == "/basket" ? "#22C55E" : "white" }} href="/basket"className="hover:text-gray-500 hidden md:inline-block hover:scale-105 transform transition duration-300 font-semibold border border-[#3E3E3E] rounded-full"><button className="bg-[#292929] w-[50px] h-[50px] rounded-full"><BsBag className="mx-auto w-[25px] h-[25px]" /></button></Link>
                    </ul>
                </nav>
            </div>
            {/* Mobile navbar opened*/}
            {open ? <ul className="absolute  z-10 mr-8 w-1/5 ml-auto h-20 right-0 top-[90px] transition-opacity duration-700 ease-in-out ">
                <li onClick={() => setOpen(prevState => !prevState)} className="bg-[#292929] cursor-pointer text-center ">
                    <Link href="/marketplace" style={{ color: pathname == "/marketplace" ? "white" : "#6b7280" }} className=" font-semibold  mb-7 text-white leading-[4rem]">Marketplace</Link>
                </li>
                <li className="bg-[#292929] border-b-[1px] border-gray-600 cursor-pointer text-center ">
                    <Link onClick={() => setOpen(prevState => !prevState)} href="/community"style={{ color: pathname == "/community" ? "white" : "#6b7280" }}  className=" font-semibold  mb-7 text-white leading-[4rem]">Community</Link>
                </li>
            </ul> : ""}
        </>
    )
}