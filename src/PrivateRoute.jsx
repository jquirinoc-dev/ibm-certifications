import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
}

export default PrivateRoute;