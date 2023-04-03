import { Navigate } from 'react-router-dom';
import { useData } from '../Context/Context';

const PrivateRoute = ({ children }) => {
  const { user } = useData();

  return !user.token ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
