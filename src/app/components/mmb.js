export const Mmb = () => {
    return (
        <div className="px-4 pt-32 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-red-500 rounded-full">Measure My Box</p>
                        </div>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6 shine-effect">
                        A custom application
                            <br className="hidden md:block" />
                            for quickly measuring {' '}
                            <span className="inline-block text-deep-purple-accent-400">boxes</span>
                        </h2>
                        <p className="text-white text-base md:text-lg">A measurement tool developed in one day to collect on-site measurements of hundreds of boxes and export them to Excel or CSV.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img 
                            src="mmb_logo.png" 
                            alt="Measure My Box Logo" 
                            className="w-40 h-auto object-contain"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="w-1/2">
                        <img className="object-cover" src="mmb1.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="w-1/2 -ml-16 lg:-ml-32">
                        <img className="object-cover" src="mmb2.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <a
                href="/mmb_details"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200  text-red-500 hover:text-red-900"
            >
                Learn more
            </a>
        </div>
    );
};