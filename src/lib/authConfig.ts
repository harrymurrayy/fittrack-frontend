import { Configuration, PopupRequest } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "1c890c47-8d12-4cc6-833a-24dc176e6198",
    authority:
      "https://login.microsoftonline.com/2c8b0440-b840-44d9-b97d-758669cf9f7f",
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000/signin",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest: PopupRequest = {
  scopes: ["api://1c890c47-8d12-4cc6-833a-24dc176e6198/access_as_user"],
};
