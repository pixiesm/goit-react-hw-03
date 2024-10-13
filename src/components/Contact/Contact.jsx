import React from "react";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <div className={s.container}>
        <p className={s.text}>
          {" "}
          <span>Name:</span> {name}
        </p>
        <p className={s.text}>
          {" "}
          <span>Number: </span> {number}
        </p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
