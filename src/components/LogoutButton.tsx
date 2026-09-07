import { apolloClient } from "../api/apolloClient";
import { clearAccessToken } from "../api/tokenStorage";

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton = ({ onLogout }: LogoutButtonProps) => {
  const handleLogout = async () => {
    clearAccessToken(); // Remove only the Devii auth token
    await apolloClient.clearStore(); // Remove authenticated GraphQL data from Apollo cache
    onLogout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
