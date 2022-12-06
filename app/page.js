import {BsArrowDown} from "react-icons/bs"
import Link from "next/link"
import hero from "../public/hero.jpg"
import Image from "next/image"
import Footer from "./Footer"
export default function HomePage() {
    return (
        <>
        <div className="flex flex-col mx-auto w-full ">
<div className="flex flex-col mx-auto w-10/12 mt-[100px] ">
<div class="relative w-full">
<Image src={hero} alt="Hero"   className="mx-auto rounded-md brightness-[0.3] "  width={2000}/>
<h3 class="absolute text-5xl text-white top-20 left-20 font-semibold">The platform to buy records</h3>
<h3 class="absolute text-md text-gray-400  top-36 left-20 w-[350px]">We aim to give you the best expierence when it comes to selling and buying records</h3>
<a href="#popular" className="flex mx-auto -mt-[155px]">
    <button className="mx-auto w-16 h-16 rounded-full border-[3px] border-green-500 text-white bg-[#292929] hover:bg-white hover:text-[#292929] transform transition duration-700 flex items-center justify-center sm:mt-32" ><BsArrowDown className="w-7 h-7" /></button>
</a>
</div>
</div>
        </div>
        <div id="popular">
        Popular Records
        </div>
        <div id="recent">
        Recent Records
        </div>
        </>
    )
}

/*
                <Image src={hero} alt="Hero"   className="mx-auto rounded-md brightness-[0.3] " width={1700}/>
                <span className="text-2xl"></span>
            <a href="#products" className="mx-auto -mt-[155px]">
                <button className="ml-8  w-16 h-16 rounded-full border-4 border-green-500 text-white bg-[#292929] hover:bg-white hover:text-[#292929] transform transition duration-700 flex items-center justify-center sm:mt-32" ><BsArrowDown className="w-7 h-7" /></button>
            </a>
            <a id="products"> 
            <div className="flex flex-col w-10/12 mx-auto h-[1000px] mt-40 gap-10">
                <div className="w-full border border-green-500 h-full">
                    best selling products
                </div>
                <div className="w-full border border-blue-500 h-full">
                    latest products
                </div>
            </div>
            </a>

*/