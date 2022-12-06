'use client'
import React from 'react';
import { use } from 'react';
import Link from 'next/link'
async function getProjects() {
    return await (await fetch("http://127.0.0.1:8090/api/collections/products/records/")).json()
}
const Projects = () => {
    const allProjects = use(getProjects())
    return (
        <>
            <div className="flex-wrap w-full h-auto flex flex-row justify-center gap-8 mt-40 pb-20  ">
                {allProjects?.items.map(product =>
                    <div key={product.id}>
                        <Link href={`marketplace/${product.id}`}>
                        <div className="box-border  bg-[#393939] bg-opacity-25 rounded-lg text-gray-100 relative z-10 w-[300px] h-[400px]" >
                            <img className="m-0 w-full rounded-t-md max-h-[268px] h-[268px]" src={product.image}/>
                            <div className="flex flex-col mt-6">
                                <div className="flex flex-row">
                            <h1 className="font-semibold text-lg ml-4">{product.title}</h1>
                            <h1 className="text-green-500 font-semibold ml-auto mr-4">€{product.price}</h1>
                            </div>
                            <div className="flex flex-row my-auto">
                            <h1 className="text-gray-400 text-sm ml-4">{product.genre}</h1>
                            </div>
                            <div className="flex flex-row mt-2">
                            <h1 className="font-semibold ml-4 ">{product.condition}</h1>
                            <h1 className="text-gray-400 ml-auto  mr-4">{product.releaseDate}</h1>
                            </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}
export default Projects
