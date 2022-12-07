import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AppAdminRoutes } from './app.admin.routes';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth()

  return(
    <BrowserRouter>
      { 
        user ? 
        ( (user.is_admin === 1) ? <AppAdminRoutes /> : <AppRoutes />)
        : <AuthRoutes /> 
      }
    </BrowserRouter>
  );
}