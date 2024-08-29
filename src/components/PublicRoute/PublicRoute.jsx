import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ element, restricted, redirectTo }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isAuthenticated && restricted) {
    return <Navigate to={redirectTo} />;
  }

  return element;
};

export default PublicRoute;
