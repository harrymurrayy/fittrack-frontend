// Use environment variable for redirect URI, with fallback detection
const getRedirectUri = (): string => {
  // First, check for environment variable (most reliable)
  if (process.env.NEXT_PUBLIC_REDIRECT_URI) {
    return process.env.NEXT_PUBLIC_REDIRECT_URI;
  }

  // Fallback: detect from window.location (client-side only)
  if (typeof window !== "undefined") {
    const { protocol, hostname, port } = window.location;
    const portSuffix = port && port !== "80" && port !== "443" ? `:${port}` : "";
    return `${protocol}//${hostname}${portSuffix}`;
  }

  // Server-side fallback: default to production
  return "https://fittrack-frontend-bpdtekgzbpgwc8a0.italynorth-01.azurewebsites.net";
};

export const config = {
  apiUrl:
    "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api",
  clientId: "1c890c47-8d12-4cc6-833a-24dc176e6198",
  tenantId: "2c8b0440-b840-44d9-b97d-758669cf9f7f",
  get redirectUri(): string {
    return getRedirectUri();
  },
};
