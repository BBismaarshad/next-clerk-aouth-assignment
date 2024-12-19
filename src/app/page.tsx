import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Welcome to Home Page
        </h1>

        <SignInButton>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 mb-4">
            Sign In
          </button>
        </SignInButton>

        <SignUpButton>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    </div>
  );
}
