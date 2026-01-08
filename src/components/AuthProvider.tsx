"use client";

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { ReactNode, useEffect, useState } from "react";

let msalInstance: PublicClientApplication | null = null;

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeMsal = async () => {
      try {
        // Determine redirect URI based on current location
        const isProduction = window.location.hostname !== "localhost";
        const redirectUri = isProduction
          ? "https://fittrack-frontend-bpdtekgzbpgwc8a0.italynorth-01.azurewebsites.net"
          : "http://localhost:3000";

        console.log("🔍 Initializing MSAL with redirectUri:", redirectUri);

        // Create MSAL instance with correct redirectUri
        msalInstance = new PublicClientApplication({
          auth: {
            clientId: "1c890c47-8d12-4cc6-833a-24dc176e6198",
            authority:
              "https://login.microsoftonline.com/2c8b0440-b840-44d9-b97d-758669cf9f7f",
            redirectUri: redirectUri,
            postLogoutRedirectUri: `${redirectUri}/signin`,
          },
          cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: false,
          },
        });

        await msalInstance.initialize();
        await msalInstance.handleRedirectPromise();

        setIsInitialized(true);
      } catch (error) {
        console.error("MSAL initialization error:", error);
        setIsInitialized(true);
      }
    };

    initializeMsal();
  }, []);

  if (!isInitialized || !msalInstance) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
