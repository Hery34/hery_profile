'use client'
import { Navigation } from "../components/navbar";
import Button from "../components/button";
import InformationAlert from "../components/information_alert";
import React, { useState } from 'react';
import Footer from "../components/footer";


export default function OvlDetails() {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <Navigation></Navigation>
            </div>
            <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold tracking-wide text-zinc-400  uppercase">
                        Features
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-red-500 dark:text-white sm:text-4xl">
                        OVL Scanner v1.0.0
                    </p>
                </div>
                <div className="flex flex-wrap my-12 dark:text-white">
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-red-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Production date
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            September 2024
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6  text-red-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Languages
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Dart
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6  text-red-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                SDK
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Flutter, Google ML Kit
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6  text-red-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Back-end
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Serveless
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6  text-red-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Role
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Project designer and planner, developer, tester, producer and deployer on Apple Business Manager for an internal use
                        </p>
                    </div>
                    <div className="w-full p-8 md:w-1/2 lg:w-1/3">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6  text-red-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Main features
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        OCR-based digit capture, decoding, and code display.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button onClick={() => setShowAlert(true)}>See the code</Button>
                    {showAlert && <InformationAlert onClose={() => setShowAlert(false)}>Unfortunatly, it is a proprietary code</InformationAlert>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}