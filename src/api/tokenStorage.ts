// Read the stored token
export const getAccessToken = () => localStorage.getItem("access_token");

// Store the token after login
export const setAccessToken = (token: string) =>
  localStorage.setItem("access_token", token);

// Remove the token on logout
export const clearAccessToken = () => localStorage.removeItem("access_token");
