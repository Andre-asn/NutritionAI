import { SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function SignedOutPage(props) {
  return (
    <div className="responsive-container flex flex-col justify-center items-center h-screen text-center px-4">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold text-6xl">
        Nutrition AI
      </h1>
      <p className="mt-4 text-lg text-gray-200">Please sign in to use all features — or try it out first as a guest!</p>

      <div className="flex gap-4 mt-6 flex-col sm:flex-row">
        <SignInButton mode="modal">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Sign In
          </button>
        </SignInButton>

        <Link to="/upload">
          <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
            Continue as Guest
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignedOutPage;
