import { Configuration, PopupRequest } from "@azure/msal-browser";

const clientId =
  process.env.NEXT_PUBLIC_CLIENT_ID || "1c890c47-8d12-4cc6-833a-24dc176e6198";
const tenantId =
  process.env.NEXT_PUBLIC_TENANT_ID || "2c8b0440-b840-44d9-b97d-758669cf9f7f";
const redirectUri =
  process.env.NEXT_PUBLIC_REDIRECT_URI || "http://localhost:3000";

export const msalConfig: Configuration = {
  auth: {
    clientId: clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri: redirectUri,
    postLogoutRedirectUri: `${redirectUri}/signin`,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest: PopupRequest = {
  scopes: [`api://${clientId}/access_as_user`],
};
