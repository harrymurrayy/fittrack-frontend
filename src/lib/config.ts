// Detect if we're in production by checking the hostname
const getRedirectUri = () => {
  if (typeof window === "undefined") {
    // Server-side: default to production
    return "https://fittrack-frontend-bpdtekgzbpgwc8a0.italynorth-01.azurewebsites.net";
  }

  // Client-side: check actual hostname
  const hostname = window.location.hostname;
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:3000";
  }

  // Production
  return "https://fittrack-frontend-bpdtekgzbpgwc8a0.italynorth-01.azurewebsites.net";
};

export const config = {
  apiUrl:
    "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api",
  clientId: "1c890c47-8d12-4cc6-833a-24dc176e6198",
  tenantId: "2c8b0440-b840-44d9-b97d-758669cf9f7f",
  get redirectUri() {
    return getRedirectUri();
  },
};
