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
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleLogin = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (inProgress === "login") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">Signing in...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.02] blur-[120px] rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo & Branding */}
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)] mb-6 animate-pulse-glow">
              <span className="text-black font-bold text-3xl">F</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              Fit<span className="accent-text">Track</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Track your fitness journey
            </p>
          </div>

          {/* Sign-in card */}
          <div className="card p-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {/* Features */}
            <div className="space-y-4 mb-8 stagger-children">
              <FeatureItem
                icon={<DumbbellIcon />}
                title="Log Workouts"
                description="Track exercises, sets, reps, and weights"
              />
              <FeatureItem
                icon={<CameraIcon />}
                title="Progress Photos"
                description="Document your physical transformation"
              />
              <FeatureItem
                icon={<CloudIcon />}
                title="Cloud Sync"
                description="Your data safely stored in Azure"
              />
            </div>

            {/* Sign-in button */}
            <button
              onClick={handleLogin}
              className="btn btn-primary w-full text-base py-3.5 group"
            >
              <MicrosoftIcon className="w-5 h-5" />
              <span>Sign in with Microsoft</span>
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-[var(--text-muted)] mt-6">
              Secured by Azure Entra ID
            </p>
          </div>

          {/* Additional info */}
          <p className="text-center text-sm text-[var(--text-muted)] mt-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            By signing in, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-[var(--text-primary)] mb-0.5">{title}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      </div>
    </div>
  );
}

// Icons
function DumbbellIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function MicrosoftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 21 21" fill="currentColor">
      <rect x="1" y="1" width="9" height="9" />
      <rect x="11" y="1" width="9" height="9" />
      <rect x="1" y="11" width="9" height="9" />
      <rect x="11" y="11" width="9" height="9" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
