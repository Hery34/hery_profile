export const SuperData = () => {
    return (
        <div className="relative px-4 mx-auto lg:py-16 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
            <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-rose-300 uppercase rounded-full bg-teal-accent-400">
                                Superdata.fr
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                            An interactive online
                            <br className="hidden md:block" />
                            quote tool optimized{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                for user experience
                            </span>
                        </h2>
                        <p className="text-base text-white md:text-lg">
                            A calculator that allows you to access an accurate
                            and precise quote in just a few clicks with
                            an ultra comfortable user experience
                        </p>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="https://superdata-next-js.vercel.app/"
                            target="_blank"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Discover it
                        </a>
                        <a
                            href="/details_super_data"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                <img
                    src="/test4.png"
                    alt=""
                />
            </div>
        </div>
    );
};