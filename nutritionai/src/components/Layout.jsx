import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

function Layout({ children }) {
  const { isSignedIn } = useUser();
  const location = useLocation();

  // Optional: hide nav on login/signup pages
  const hideNav = ["/sign-in", "/sign-up"].some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!hideNav && (
        <nav className="flex flex-wrap justify-center gap-4 p-4 bg-gray-800">
          <Link to="/" className="text-xl font-bold text-pink-400 hover:text-pink-300">
            NutritionAI
          </Link>
          <Link to="/upload" className="hover:text-pink-300">Upload</Link>
          {isSignedIn && (
            <>
              <Link to="/profile" className="hover:text-pink-300">Profile</Link>
              <Link to="/add-friends" className="hover:text-pink-300">Add Friends</Link>
              <Link to="/friends-meals" className="hover:text-pink-300">View Friends Meals</Link>
              <Link to="/tracking" className="hover:text-pink-300">Goal Tracking</Link>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </nav>
      )}
      <main className="p-6 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
