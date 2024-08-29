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
    <div className={s.formwrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} id="name" name="name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} id="number" name="number" />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button className={s.contactsButton} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
