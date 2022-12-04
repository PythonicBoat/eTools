import React from "react"
import Image from "next/image"

export default function Home() {
    return (
        <section className="bg-blue-50 dark:bg-gray-900 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl  text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl m-20 sm:text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    eTools - Redifining web
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 m-5 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    A web based cross-platform utility app to manage all your development needs.
                </p>
               { /* <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-400 uppercase">
                        FEATURED IN
                    </span>
                    <div className="flex flex-wrap items-center mt-8 text-gray-500 justify-center sm:justify-between mb-5">
                        
                        <a
                            href="https://github.com/etoolsapp/website"
                            target="_blank"
                            className="flex items-center"
                            rel="noreferrer"
                        >
                            <Image
                                src="/github-button.svg"
                                alt="ETOOLSAPP Github"
                                width="200"
                                height="54"
                            />
                        </a>
                        <a
                            href="https://discord.gg/"
                            target="_blank"
                            className=" hover:text-gray-800 dark:hover:text-gray-400 flex items-center"
                            rel="noreferrer"
                        >
                            <Image
                                src="/discord-button.svg"
                                alt="ETOOALSAPP discord"
                                width="200"
                                height="54"
                            />
                        </a>
                    </div> 
    </div> */ }
            </div>
        </section>
    )
}
