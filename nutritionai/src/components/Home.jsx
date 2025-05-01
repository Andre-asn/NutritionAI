import { useUser, SignInButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-black text-white">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
          Nutrition AI
        </h1>
        <p className="mt-2 text-gray-300">Please sign in or continue as a guest</p>

        <div className="mt-6 flex gap-4">
          <SignInButton>
            <button className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600">
              Sign In
            </button>
          </SignInButton>

          <button
            onClick={() => navigate("/upload")}
            className="bg-gray-500 px-4 py-2 text-white rounded hover:bg-gray-600"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white p-8">
      <h2 className="text-2xl font-bold">Welcome back!</h2>
      <p className="mt-2">Explore your dashboard or upload new meals.</p>
    </div>
  );
}

export default Home;
