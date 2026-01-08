import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../lib/authConfig";

export function useAuth() {
  const { instance, accounts } = useMsal();

  const getAccessToken = async (): Promise<string> => {
    if (accounts.length === 0) {
      throw new Error("No authenticated user");
    }

    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });
      return response.accessToken;
    } catch (error) {
      console.error("Token acquisition failed:", error);
      throw error;
    }
  };

  const getUserId = (): string => {
    if (accounts.length === 0) {
      throw new Error("No authenticated user");
    }
    return accounts[0].localAccountId;
  };

  return { getAccessToken, getUserId };
}