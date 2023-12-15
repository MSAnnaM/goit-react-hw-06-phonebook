import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { selectContacts, selectFilter } from '../redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      localContacts.forEach(contact => dispatch(addContact(contact)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contacts}>Contacts</h2>
      <Filter />
      {filteredContacts.length ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <p className={styles.no_contacts}>There isn't any contact</p>
      )}
    </div>
  );
};