import Link from "next/link";
export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form>
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
                    <div className="flex items-center justify-between mb-6">
                        
                        <a href="#" className="text-sm text-indigo-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-4">
                    Don't have an account?{' '}
                    <Link href="/auth/signup" className="text-indigo-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
