import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const initialData = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contactsData, setContactsData] = useState(() => {
    const savedContactsData = JSON.parse(
      window.localStorage.getItem("contacts")
    );
    if (savedContactsData?.length) {
      return savedContactsData;
    }
    return initialData;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactsData));
  });

  const [filter, setFilter] = useState("");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filterContacts = contactsData.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleAddContact = (newContact) => {
    setContactsData((prev) => {
      return [...prev, newContact];
    });
  };

  const handleDelete = (id) => {
    setContactsData(contactsData.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox filter={filter} onFilterChange={handleFilterChange} />
        <ContactList contacts={filterContacts} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
