import { Configuration, PopupRequest } from "@azure/msal-browser";
import { config } from "./config";

// Create MSAL config dynamically to ensure redirectUri is evaluated at runtime
// This is important because config.redirectUri uses window.location on client-side
export const msalConfig: Configuration = {
  auth: {
    clientId: config.clientId,
    authority: `https://login.microsoftonline.com/${config.tenantId}`,
    get redirectUri() {
      return config.redirectUri;
    },
    get postLogoutRedirectUri() {
      return `${config.redirectUri}/signin`;
    },
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest: PopupRequest = {
  scopes: [`api://${config.clientId}/access_as_user`],
};
