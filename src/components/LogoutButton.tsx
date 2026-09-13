import { apolloClient } from "../api/apolloClient";
import { clearAccessToken } from "../api/tokenStorage";
import { Button } from "@mui/material";

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton = ({ onLogout }: LogoutButtonProps) => {
  const handleLogout = async () => {
    clearAccessToken(); // Remove only the Devii auth token
    await apolloClient.clearStore(); // Remove authenticated GraphQL data from Apollo cache
    onLogout();
  };

  return (
    <Button variant="contained" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
