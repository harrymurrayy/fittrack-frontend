"use client";

import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { accounts } = useMsal();
  const router = useRouter();
  const isAuthenticated = accounts.length > 0;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <span className="text-black font-bold text-2xl">F</span>
          </div>
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
