import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


function RouteProtector({ isAuthPage = false }) {
  const { token } = useAuth(); // Get the token from the current session my custom useContext()

  if (isAuthPage) {
    // Auth routes if the user has active session must not be allowed to see these pages
    return token ? <Navigate to="/" /> : <Outlet />;
  }


  // Protected routes POST PUT DELETE if there is not active session send the user to either login or signup
  return token ? <Outlet /> : <Navigate to="/auth" />;
}

export default RouteProtector;