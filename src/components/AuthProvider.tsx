"use client";

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "../lib/authConfig";
import { ReactNode, useEffect, useState, useRef } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const msalInstanceRef = useRef<PublicClientApplication | null>(null);

  useEffect(() => {
    const initializeMsal = async () => {
      try {
        // Create MSAL instance on client-side only
        // This ensures window.location is available for redirect URI detection
        if (!msalInstanceRef.current) {
          msalInstanceRef.current = new PublicClientApplication(msalConfig);
        }

        const msalInstance = msalInstanceRef.current;

        await msalInstance.initialize();
        await msalInstance.handleRedirectPromise();

        msalInstance.addEventCallback((event) => {
          if (event.eventType === EventType.LOGIN_SUCCESS) {
            console.log("Login successful!");
          }
        });

        setIsInitialized(true);
      } catch (error) {
        console.error("MSAL initialization error:", error);
        setIsInitialized(true);
      }
    };

    initializeMsal();
  }, []);

  if (!isInitialized || !msalInstanceRef.current) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <span className="text-black font-bold text-2xl">F</span>
          </div>
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">Loading FitTrack...</p>
        </div>
      </div>
    );
  }

  return <MsalProvider instance={msalInstanceRef.current}>{children}</MsalProvider>;
}
