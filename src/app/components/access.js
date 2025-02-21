export const Access
    = () => {
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-teal-accent-400">
                            <img
                                className="object-contain rounded h-24 w-24"
                                src="access_logo.jpg"
                                alt="Access logo"
                            />
                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-yellow-500 sm:text-4xl md:mx-auto shine-effect">
                                <span className="relative inline-block">
                                    <span className="relative text-yellow-500">ESSI Tool</span>
                                </span>{' '}
                            </h2>
                            <p className="text-base text-white md:text-lg">
                            An internal (self-)assessment tool for the dynamic capabilities of organizations, serving as a hub for service ecosystem support for innovation, intended for research use.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <a
                                    href="/access_detail"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-yellow-500 hover:text-yellow-900"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:pl-8">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                className="w-full h-auto rounded shadow-lg aspect-[4/3] object-cover"
                                src="access1.webp"
                                alt="Application screenshot 1"
                            />
                            <img
                                className="w-full h-auto rounded shadow-lg aspect-[4/3] object-cover"
                                src="access2.webp"
                                alt="Application screenshot 2"
                            />
                            <img
                                className="w-full h-auto rounded shadow-lg aspect-[4/3] object-cover"
                                src="access3.webp"
                                alt="Application screenshot 3"
                            />
                            <img
                                className="w-full h-auto rounded shadow-lg aspect-[4/3] object-cover"
                                src="access4.webp"
                                alt="Application screenshot 4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };