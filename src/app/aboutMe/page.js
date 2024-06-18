import Link from "next/link";
import React from "react";
import { Navigation } from "../components/navbar";
import { Card } from "../components/card";
import { InformationCard } from "../components/InformationCard";
import { Title } from "../components/title";
import { Text } from "../components/text";
import Footer from "../components/footer";


export default function AboutMe() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <Navigation></Navigation>
            </div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase rounded-full bg-teal-accent-400">
                        About me...
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black-200 sm:text-4xl md:mx-auto shine-effect">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20  text-zinc-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">An individual</span>
                    </span>{' '}
                    with an immense capacity for learning and adaptation
                </h2>
                <p className="text-base text-white md:text-lg">
                    My unconventional journey has allowed me to develop a capacity for synthesis and qualities of perspective,
                    and despite this dark theme, I have a great sense of humor
                </p>
            </div>
            <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-600">
                        <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-400">A future Application conceptor and developper</h6>
                    <p className="text-sm text-gray-900">
                        I will at least by September complete the second part of my training which will lead to a diploma in Application Developer Designer,
                        I'll be more able to understand design problems and the importance of well-thought-out code
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-600">
                        <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-400">An accomplished knowledge of several languages</h6>
                    <p className="text-sm text-gray-900">
                        I have an advanced understanding of a few languages, but let’s be honest, I am very comfortable with SQL, Java, PHP,
                        Dart (especially Flutter) and React (with the NextJS overlay).
                        I also fell in love with GraphQL, which I am patiently learning
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-600">
                        <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-400">WordPress and WooCommerce</h6>
                    <p className="text-sm text-gray-900">
                        These are the two technologies that have led me to go much further
                        in computer development, I think over time they have become very familiar to me.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-600">
                        <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-400">A 360-degree understanding of web development needs</h6>
                    <p className="text-sm text-gray-900">
                        I’ve had the opportunity to understand all the stakes of a website, beyond its simple design.
                        I have passed Google’s certificates in SEA and digital marketing, as well as a MOOC from the CNIL on the GDPR
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-600">
                        <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-400">A technology enthusiast</h6>
                    <p className="text-sm text-gray-900">
                        My devouring passion for technological issues leads me to be constantly vigilant and to be
                        constantly aware of the latest trends and developments in development in particular
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-600">
                        <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-gray-400">An ease of integration and a team spirit</h6>
                    <p className="text-sm text-gray-900">
                        I am fully aware of the collaborative spirit that covers the developer profession,
                        I have, through my experiences, developed a real ability to integrate and merge into existing teams
                    </p>
                </div>
            </div>
            <div className="text-center">
                <a
                    href="/hery"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Learn more
                </a>
            </div>
            <Footer></Footer>
        </div>
    );
};