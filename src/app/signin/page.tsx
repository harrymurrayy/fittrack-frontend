"use client";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../lib/authConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { instance, accounts, inProgress } = useMsal();
  const router = useRouter();
  const isAuthenticated = accounts.length > 0;

  useEffect(() => {
    // If already authenticated, redirect to home
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleLogin = async () => {
    try {
      // Use loginRedirect instead of loginPopup
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Show loading during redirect
  if (inProgress === "login") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Signing in...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">FitTrack</h1>
          <p className="text-gray-600">Track your fitness journey</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-black">Log Workouts</h3>
              <p className="text-sm text-gray-600">
                Track exercises, sets, reps, and weights
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-black">Progress Photos</h3>
              <p className="text-sm text-gray-600">
                Upload and track your physical transformation
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-black">Secure Cloud Storage</h3>
              <p className="text-sm text-gray-600">
                Your data safely stored in Azure
              </p>
            </div>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          </svg>
          <span>Sign in with Microsoft</span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Secure authentication powered by Azure Entra ID
        </p>
      </div>
    </div>
  );
}
