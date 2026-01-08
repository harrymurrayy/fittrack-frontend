const isProduction =
  typeof window !== "undefined" && window.location.hostname !== "localhost";

export const config = {
  apiUrl: isProduction
    ? "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api"
    : "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api",

  clientId: "1c890c47-8d12-4cc6-833a-24dc176e6198",
  tenantId: "2c8b0440-b840-44d9-b97d-758669cf9f7f",

  redirectUri: isProduction
    ? "https://fittrack-frontend-bpdtekgzbpgwc8a0.italynorth-01.azurewebsites.net"
    : "http://localhost:3000",
};
