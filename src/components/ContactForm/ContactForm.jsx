import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from '@reduxjs/toolkit';
import styles from './ContactForm.module.css';
import Notiflix from 'notiflix';
import { selectContacts } from '../../redux/selectors';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      Notiflix.Notify.warning('Please write your name and number');
      return;
    }
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
      Notiflix.Notify.warning(`${name} is already in the contacts.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          placeholder="Name:"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          className={styles.form_input}
          type="tel"
          name="number"
          placeholder="Number:"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className={styles.form_btn}>
        Add Contact
      </button>
    </form>
  );
};