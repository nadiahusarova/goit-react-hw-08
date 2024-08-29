import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts/contactsOps";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const status = useSelector((state) => state.contacts.status);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContacts());
    }
  }, [dispatch, status]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.contactListItem}>
          <Contact contact={contact} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;