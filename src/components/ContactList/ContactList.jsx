// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
// import { selectFilteredContacts } from "../../redux/contacts/slice";
// import s from "./ContactList.module.css";
// import Contact from "../Contact/Contact";

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectFilteredContacts);
//   const status = useSelector((state) => state.contacts.status);
//   const error = useSelector((state) => state.contacts.error);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchContacts());
//     }
//   }, [dispatch, status]);

//   const handleDelete = (id) => {
//     dispatch(deleteContact(id));
//   };

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <ul className={s.contactList}>
//       {contacts.map((contact) => (
//         <li key={contact.id} className={s.contactListItem}>
//           <Contact contact={contact} handleDelete={handleDelete} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filters/selectors';
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  //   useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchContacts());
  //   }
  // }, [dispatch, status]);
  // const handleDelete = (id) => {
  //       dispatch(deleteContact(id));
  //     };
  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={s.contactListItem}>
          {/* handleDelete={handleDelete} */}
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
