import Link from "next/link"
import React from "react"

export default function Footer() {
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273090" fillOpacity="1" d="M0,32L24,64C48,96,96,160,144,181.3C192,203,240,181,288,154.7C336,128,384,96,432,69.3C480,43,528,21,576,48C624,75,672,149,720,165.3C768,181,816,139,864,154.7C912,171,960,245,1008,272C1056,299,1104,277,1152,229.3C1200,181,1248,107,1296,80C1344,53,1392,75,1416,85.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        </footer>
        // <footer className="sticky top-[100vh] p-4 h-[12vh] bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        //     <div className="mx-auto max-w-screen-xl text-center">
    
        //         <p className="my-1 text-gray-500 dark:text-gray-400">
        //         </p>
        //         <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
        //             © {`${new Date().getFullYear()} `}
        //             <Link href="/" className="hover:underline">
        //                 ETOOLSAPP
        //             </Link>{" "}
        //             All Rights Reserved.
        //         </div>
        //     </div>
        // </footer>
    )
}
