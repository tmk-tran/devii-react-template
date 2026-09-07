const apiUrl = import.meta.env.VITE_DEVII_API_URL; // Devii API base URL
const tenantId = import.meta.env.VITE_DEVII_TENANT_ID; // Devii tenant ID

export const configError = !apiUrl
  ? "Missing VITE_DEVII_API_URL. Add it to your .env file."
  : !tenantId
    ? "Missing VITE_DEVII_TENANT_ID. Add it to your .env file."
    : null;

export const deviiConfig = {
  apiUrl, // Validated Devii API URL
  tenantId, // Validated Devii tenant ID
};
