"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMsal } from "@azure/msal-react";
import Navigation from "../components/Navigation";

export default function Home() {
  const router = useRouter();
  const { accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-black mb-4">FitTrack</h1>
        <p className="text-xl text-gray-600 mb-8">Track your gym progress</p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/workouts")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Workouts
          </button>
          <button
            onClick={() => router.push("/photos")}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Go to Photos
          </button>
        </div>
      </main>
    </div>
  );
}
