
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Please fill in the field")
      .min(3, "Name must be longer than 2 letters")
      .max(30, "Name must be shorter than 30 letters"),
    number: Yup.string()
      .required("Please fill in the field")
      .min(7, "Number must be longer than 6 numbers")
      .max(12, "Number must be shorter than 13 numbers"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    const newContact = { ...data, id: nanoid() };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.contactsForm}>
        <div>
          <label htmlFor="name">Name</label>
          <Field className={s.contactsField} id="name" name="name" />
          <ErrorMessage
            className={s.contactsError}
            name="name"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field className={s.contactsField} id="number" name="number" />
          <ErrorMessage
            className={s.contactsError}
            name="number"
            component="div"
          />
        </div>
        <button className={s.contactsButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;