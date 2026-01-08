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
        // Initialize MSAL instance
        await msalInstance.initialize();

        // Handle redirect promise after initialization
        await msalInstance.handleRedirectPromise();

        // Add event callback
        msalInstance.addEventCallback((event) => {
          if (event.eventType === EventType.LOGIN_SUCCESS) {
            console.log("Login successful!");
          }
        });

        setIsInitialized(true);
      } catch (error) {
        console.error("MSAL initialization error:", error);
        setIsInitialized(true); // Still set to true to prevent infinite loading
      }
    };

    initializeMsal();
  }, []);

  // Show loading while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
