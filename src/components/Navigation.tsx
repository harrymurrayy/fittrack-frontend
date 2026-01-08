"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMsal } from "@azure/msal-react";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { instance, accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;
  const user = accounts[0];

  const handleLogout = async () => {
    try {
      await instance.logoutRedirect({
        postLogoutRedirectUri: "http://localhost:3000/signin",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/workouts", label: "Workouts" },
    { href: "/photos", label: "Progress Photos" },
  ];

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              FitTrack
            </Link>
          </div>

          {/* Navigation Links - Only show if authenticated */}
          {isAuthenticated && (
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* User Info & Logout - Only show if authenticated */}
          {isAuthenticated && (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">
                {user?.name || user?.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
