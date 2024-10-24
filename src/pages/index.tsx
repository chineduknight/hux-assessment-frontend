import Authenticated from "./Authenticated";
import UnAuthenticated from "./UnAuthenticated";
import { useAuth } from "../context/AuthContext";

const Pages = () => {
  const { user } = useAuth();
  console.log("user:", user);
  return user ? <Authenticated /> : <UnAuthenticated />;
};

export default Pages;
