export const Stally = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-16 sm:h-16 xl:h-16 w-16 sm:w-16 xl:w-16"
                            src="logo_stally.png"
                            alt=""
                        />

                    </div>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        My Storage Ally
                        <br className="hidden md:block" />
                        {' '}
                        <span className="inline-block text-orange-400">
                            Stally
                        </span>
                    </h5>
                    <p className="mb-6 text-white">
                        A mobile application project that enables optimized personal storage management. This is a highly intriguing and challenging project, as it delves into areas such as mobile database creation and QR code utilization.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <a
                                href="https://gnpnbivapdxihsupafcm.supabase.co/storage/v1/object/public/portofolio_bucket/Stally.apk?t=2024-06-24T10%3A46%3A45.220Z"
                                download="Stally.apk"
                                target="_blank"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Download the apk file
                            </a>
                            <a
                                href="/details_stally"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-red-900"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div >
                    <video
                        className="w-full h-56 sm:h-96 rounded shadow-lg object-contain bg-black"
                        src="https://gnpnbivapdxihsupafcm.supabase.co/storage/v1/object/public/portofolio_bucket/stally_demo1.mp4?t=2024-06-24T08%3A41%3A35.020Z"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                </div>
            </div>
        </div>
    );
};