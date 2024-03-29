import Link from "next/link";
import React from "react";
import { Navigation } from "../components/navbar";
import Footer from "../components/footer";


export default function Packages() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <Navigation></Navigation>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto sm:text-center lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase rounded-full bg-teal-accent-400">
                                What is it about ?
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-zinc-400 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-zinc-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            utlimate tool for the organized developer
                        </h2>
                        <p className="text-base text-white md:text-lg">
                            I was told from the begining of my coding journey :

                        </p>
                        <p className="text-base text-white md:text-lg">
                            "a good developer is a lazy one..."
                        </p>
                    </div>
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src="packages.png"
                            alt="dart packages hery dashboard"
                        />
                    </div>
                    <p className="max-w-xl mb-4 text-base text-white sm:mx-auto">
                        As my skills allow me to delve deeper into addressing client needs,
                        I have begun to identify recurring requirements and the potential to factorize them into packages
                        for increased efficiency and time-saving. For now, I have embarked on this with Flutter packages,
                        but I will soon start doing the same with Java-Maven and others...
                    </p>
                    <a
                        href="https://pub.dev/publishers/hery.website/packages"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-zinc-400 hover:text-deep-purple-800"
                    >
                        Learn more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div>


            <Footer></Footer>
        </div>
    )
}