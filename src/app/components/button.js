
export default function Button({ onClick, children }) {

    return (
        <button type="button" className="py-2 px-4 bg-gray-900 hover:bg-gray-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={onClick}>
            {children}
        </button>

    )
}