export const LivraisonDashboard = () => {
    return (
        <div className="px-4  py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-600 last:uppercase rounded-full bg-teal-accent-400">
                            Livraison V2 Administration Dashboard
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  text-black sm:text-4xl md:mx-auto shine-effect">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                        Centralized Management Dashboard
                    </h2>
                    <p className="text-base text-white md:text-lg">
                    Control Panel of delivery operations with precision and security—total control, complete transparency, informed decisions.
                    </p>
                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-scale-down w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src="/livraison_dashboard.png"
                        alt=""
                    />
                </div>
                <p className="max-w-xl mb-4 text-base text-white sm:mx-auto">
                Granular permission management: 
                <ul>
                <li>three customizable access profiles to secure data and adapt each user's rights</li>
<li>Real-time tracking: instantly visualize all ongoing deliveries on a clear, intuitive interface</li>
<li>Automated secure SMS delivery: share protected tracking links with customers in one click</li>
<li>Detailed statistics and reports: analyze performance, identify trends, and optimize operations</li>
<li>Automatic parcel retention time calculation: precisely track storage duration for each package without manual effort</li>
<li>Centralized interface: manage your entire operation from a single control point</li>
</ul>
                </p>
                    <a
                        href="/livraison_dashboard_details"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-pink-600 hover:text-blue-800"
                    >
                        Learn more
                    </a>
                </div>
        </div>

    )
}