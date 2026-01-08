"use client";

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "../lib/authConfig";
import { ReactNode, useEffect, useState } from "react";

const msalInstance = new PublicClientApplication(msalConfig);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeMsal = async () => {
      try {
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

  if (!isInitialized) {
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

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
