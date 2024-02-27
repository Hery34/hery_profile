export const Lgae = () => {
    return (
        <div className="px-4  py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-yellow-700 last:uppercase rounded-full bg-teal-accent-400">
                            legrenieraepices.com
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  text-black sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                            <span className="relative">A</span>
                        </span>{' '}
                        complete, functionnal and active e-commerce site
                    </h2>
                    <p className="text-base text-white md:text-lg">
                        A reference in spices from Madagascar
                    </p>
                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-scale-down w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src="/lgae.jpg"
                        alt=""
                    />
                </div>
                <p className="max-w-xl mb-4 text-base text-white sm:mx-auto">
                    My first website developed with WordPress using Elementor and Yoast SEO for a high SEO score
                </p>
                <div className="flex items-center justify-center">
                    <a
                        href="https://legrenieraepices.com/"
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Discover it
                    </a>
                    <a
                        href="/lgae_details"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>

    )
}