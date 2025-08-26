export const ExpertIa = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-16 sm:h-16 xl:h-16 w-16 sm:w-16 xl:w-16"
                            src="/logo_expertIA.png"
                            alt=""
                        />
                    </div>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        ExpertIA
                        <br className="hidden md:block" />
                        {' '}
                        <span className="inline-block text-orange-600">
                            www.expert-ia.dev
                        </span>
                    </h5>
                    <p className="mb-6 text-white">
                    A comprehensive AI automation platform for creating intelligent agents and workflows. 
    From customer management to document processing, scale your productivity with autonomous systems 
    that think, learn, and adapt to your business needs.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <a
                                href="https://expert-ia.dev/"
                                target="_blank"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Discover it
                            </a>
                            <a
                                href="/expertIADetails"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-600 hover:text-red-900"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div >
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-scale-down w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src="/expertIA.png"
                        alt=""
                    />
                </div>
                </div>
            </div>
        </div>
    );
};