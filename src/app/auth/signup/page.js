import Link from "next/link"
export default function SignUp() {
    return  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form>
        <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your Name"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your password"
                    required
                />
            </div>
            
            <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Sign Up
            </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
            Already Have an Account?{' '}
            <Link href="/auth/login" className="text-indigo-500 hover:underline">
                Login
            </Link>
        </p>
    </div>
</div>
}