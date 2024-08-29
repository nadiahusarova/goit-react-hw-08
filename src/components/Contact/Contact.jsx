import { useDispatch } from "react-redux";
import { FaRegUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={s.wrapper}>
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
      <button
        onClick={() => handleDelete(contact.id)}
        type="button"
        className={s.button}
      >
        Delete
      </button>
    </div>
  );
};


export default Contact;
