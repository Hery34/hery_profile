export default function Footer() {
    return (

        <footer className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 dark:bg-gray-800 w-full py-8">
            <div className="max-w-screen-xl px-4 mx-auto">
                <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
                    <li className="my-2">
                        <a className="text-white hover:text-gray-400 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://github.com/Hery34">
                            Github
                        </a>
                    </li>
                    <li className="my-2">
                        <a className="text-white hover:text-gray-400 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://pub.dev/publishers/hery.website/packages">
                            Pub.dev
                        </a>
                    </li>
                    <li className="my-2">
                        <a className="text-white hover:text-gray-400 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="https://www.linkedin.com/in/hery-rakotomanana-andrianjohany-/">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-center mt-8">
                <p className="text-gray-400">© 2024 Hery Rakotomanana Andrianjohany</p>
            </div>
        </footer>

    )
}