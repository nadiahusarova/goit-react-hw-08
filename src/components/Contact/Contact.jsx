import React from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaRegUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={s.wrepper}>
      <div>
        <p>
          <FaRegUser className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <div className={s.wrapper}>
        <button
          onClick={() => handleDelete(contact.id)}
          type="button"
          className={s.button}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
