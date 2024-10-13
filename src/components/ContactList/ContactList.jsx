// import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDeleteContact={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
