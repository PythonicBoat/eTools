/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react"
// import Image from "next/future/image"
import { FaWindowClose, FaMoon, FaSun } from "react-icons/fa"
import { useRouter } from "next/router"
import LinksData from "../../assets/data/links_menu.json"

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false)
    const router = useRouter()

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        // Perform localStorage action
        if (
            localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark")
            setDarkMode(false)
        } else {
            document.documentElement.classList.remove("dark")
            setDarkMode(true)
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode) {
            localStorage.setItem("color-theme", "dark")
        } else {
            localStorage.setItem("color-theme", "light")
        }
    }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="h-[10vh] container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    {/* {!darkMode ? (
                        <Image
                            xsrc="/LOGO.svg"
                            width="33"
                            height="32"
                            className="mr-3 h-6 sm:h-9"
                            alt="ETOOLSAPP Logo"
                        />
                    ) : (
                        <Image
                            src="/LOGO-black.svg"
                            width="33"
                            height="32"
                            className="mr-3 h-6 sm:h-9"
                            alt="ETOOLSAPP Logo"
                        />
                    )} */}
                    <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                        eTools
                    </span>
                </a>

                <button
                    id="theme-toggle"
                    onClick={toggleDarkMode}
                    type="button"
                    className=" inline-flex items-center  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-gray-500   rounded-lg text-sm p-2.5"
                >
                    <FaMoon
                        id="theme-toggle-dark-icon"
                        className={`${
                            darkMode === false ? "hidden" : ""
                        }  justify-center items-center w-5 h-5`}
                    />
                    <FaSun
                        id="theme-toggle-light-icon"
                        className={`${
                            darkMode === true ? "hidden" : ""
                        }  justify-center items-center w-5 h-5`}
                    />
                </button>
                <button
                    onClick={() => setToggleNav(!toggleNav)}
                    id="toggle"
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul
                        id="menu"
                        className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                    >
                        {LinksData?.map((link, index) => (
                            <li
                                className="flex items-center"
                                key={Math.random(index) + Math.random(8)}
                            >
                                <a
                                    className="block py-2 pr-4 pl-3  text-gray-900 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                                    href={link.url}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    <a
                    // Github
                        href="https://github.com/etoolsapp/website"
                        type="button"
                        className="rounded-full border-2 border-gray text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-4 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="github"
                            className="w-4 h-full mx-auto"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                        >
                            <path
                                fill="currentColor"
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://discord.gg/YXJNrEFk4e"
                        type="button"
                        className="text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-5 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                    <img src="https://cdn.etools.tech/mvo7.svg"></img>
                    </a>
                        <li className="pr-4">
                            <button
                                id="theme-toggle"
                                onClick={toggleDarkMode}
                                type="button"
                                className="  text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 m-3 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                            >
                                <FaMoon
                                    id="theme-toggle-dark-icon"
                                    className={`${
                                        darkMode === false ? "hidden" : ""
                                    }  justify-center items-center w-5 h-5`}
                                />
                                <FaSun
                                    id="theme-toggle-light-icon"
                                    className={`${
                                        darkMode === true ? "hidden" : ""
                                    }  justify-center items-center w-5 h-5`}
                                />
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Mobile nav */}
                <ul
                    className={`
                md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 z-50 ${toggleNav ? "left-0" : "left-[-100%] "}
                `}
                >
                    <button
                        type="button"
                        onClick={() => setToggleNav(!toggleNav)}
                    >
                        <FaWindowClose size="32" />
                    </button>
                    {LinksData?.map((link, index) => (
                        <li key={Math.random(index) + Math.random(8)}>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleNav(!toggleNav)
                                    router.push(link.url)
                                }}
                            >
                                <span
                                    className="py-7 px-3 inline-block"
                                    aria-current="page"
                                >
                                    {link.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
