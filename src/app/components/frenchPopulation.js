export const FrenchPopulation
    = () => {
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-16 sm:h-16 xl:h-16 w-16 sm:w-16 xl:w-16"
                                src="logo_fp.png"
                                alt=""
                            />

                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  text-black sm:text-4xl md:mx-auto shine-effect">
                                <span className="relative inline-block">

                                    <span className="relative">Discover</span>
                                </span>{' '}
                                the french population
                            </h2>
                            <p className="text-base text-white md:text-lg">
                                Discover the French population, its distribution, through a refined but careful interactive tool
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <a
                                    href="https://frenchpopulation-hery34s-projects.vercel.app/"
                                    target="_blank"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >
                                    Discover it
                                </a>
                                <a
                                    href="/details_french_population"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500 hover:text-red-900"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="FP_1.png"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="FP_3.png"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="w-full h-auto max-w-[320px] max-h-[320px] rounded shadow-lg"
                                src="FP_2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };