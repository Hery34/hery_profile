
export default function InformationAlert({ children, onClose }) {

    return (

        <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="w-full h-full text-center">
                <div className="flex flex-col justify-between h-full">

                    <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                        {children}
                    </p>
                    <div className="flex items-center justify-between w-full gap-4 mt-8">
                        <button type="button" className="py-2 px-4  bg-gray-900 hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}