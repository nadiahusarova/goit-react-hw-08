import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsFetchingCurrentUser } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = React.lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = React.lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  React.useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    isFetchingCurrentUser ? (
      <p>Loading...</p>
    ) : (
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute restricted redirectTo="/contacts" element={<RegistrationPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted redirectTo="/contacts" element={<LoginPage />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
};

export default App;
