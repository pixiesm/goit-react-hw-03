import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, options) => {
    onAddContact({ ...values, id: nanoid() });
    options.resetForm();
  };

  const nameRe = /^[ a-zA-Z\-\’]+$/;
  const numberRe = /^[0-9.-]*$/;

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRe, "Name is invalid")
      .min(3, "Name is too short")
      .max(50, "Name is too long")
      .required("Name is required"),
    number: Yup.string()
      .matches(numberRe, "Number is invalid")
      .min(3, "Number is too short")
      .max(50, "Number is too long")
      .required("Number is required"),
  });
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name" className={s.field} />
            <ErrorMessage name="name" />
          </label>
          <label className={s.label}>
            <span>Number:</span>
            <Field name="number" className={s.field} />
            <ErrorMessage name="number" />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
