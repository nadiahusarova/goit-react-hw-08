import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { changeFilter } from "./redux/filters/filtersSlice";
import s from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage/LoginPage"; 
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { Layout } from "./components/Layout/Layout"; 

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearch = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <Router>
      <Layout>
        <Routes>
     
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <div className={s.wrap}>
                  <h1 className={s.h1}>Phonebook</h1>
                  <ContactForm />
                  <SearchBox onSearch={handleSearch} />
                  <ContactList />
                </div>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
