import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../AuthStore/useAuth';

function Home() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);

  const handleStartWriting = () => {
    if (isAuthenticated) {
      navigate(currentUser.role === "AUTHOR" ? "/author-profile" : "/user-profile");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-pink-500 bg-pink-100 px-4 py-1 rounded-full mb-6">
              A space for real voices
            </span>
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
              Create. Write &<br />
              <span className="text-pink-600">Connect.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              Share your ideas and insights with readers who you connect with.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleStartWriting}
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-pink-600 transition-all active:scale-95"
              >
                {isAuthenticated ? "Go to Dashboard" : "Get Started — It's Free"}
              </button>
              {!isAuthenticated && (
                <button
                  onClick={() => navigate("/login")}
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
  <section className="py-24 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black text-gray-900 mb-4">Ready to share your story?</h2>
      
      {isAuthenticated ? (
        // ✅ Show this when logged in
        <div>
          <p className="text-gray-500 mb-8 text-lg">Welcome back, {currentUser?.firstName}!</p>
          <button
            onClick={handleStartWriting}
            className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95"
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        // ✅ Show this when not logged in
        <div>
          <p className="text-gray-500 mb-8 text-lg">Join as an author or reader — no experience needed.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95"
            >
              Create an Account
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold border-2 border-gray-100 hover:bg-gray-50 transition-all active:scale-95"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  </section>

    </div>
  );
}

export default Home;