import { deviiConfig } from "../config";

interface LoginCredentials {
  login: string; // Devii username
  password: string; // Devii password
  tenantid: string; // Devii tenant ID
}

interface LoginResponse {
  access_token?: string; // Token returned after successful authentication
}

export const loginToDevii = async ({
  login,
  password,
  tenantid,
}: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch(`${deviiConfig.apiUrl}/auth`, {
    method: "POST", // Authenticate with Devii
    headers: {
      "Content-Type": "application/json", // Send credentials as JSON
    },
    body: JSON.stringify({
      login,
      password,
      tenantid,
    }), // Devii login credentials
  });

  if (!response.ok) {
    throw new Error("Unable to authenticate with Devii"); // Handle HTTP failures
  }

  return response.json(); // Return authentication response
};
